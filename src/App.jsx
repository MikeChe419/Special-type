import "./styles/@global.sass";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import NavigationBlock from "./components/NavigationBlock/NavigationBlock";
import Footer from "./components/Footer/Footer";
import Friends from "./pages/Friends/Friends";
import Contacts from "./pages/Contacts/Contacts";
import Help from "./pages/Help/Help";
import { SingleNews } from "./pages/SingleNews/SingleNews";
import { NotFound } from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import ReviewSingle from "./pages/ReviewSingle/ReviewSingle";
import { Payment } from "./pages/Payment/Payment";
import { Thanks } from "./pages/Thanks/Thanks";
import { mainApi } from "./utils/api/mainApi";
import AddReview from "./pages/AddReview/AddReview";
import { AllCards } from "./pages/AllCards/AllCards";
import serverErrorImg from "./assets/images/serverError.jpg";

///временные данные
import dataEvent from "./TEMP_EVENT";
import dataPosters from "./TEMP_DATA_POSTERS";
import tempNews from "./TEMP_NEWS";
import dataCompany from "./TEMP_COMPANY";
import dataPeople from "./TEMP_PEOPLE";
import dataReviews from "./TEMP_REVIEWS";
import { Preloader } from "./components/Preloader/Preloadex";

function App({ id }) {
  const [itemForRegistration, setItemForRegistration] = useState({});

  const [newsData, setNewsData] = useState([]);
  const [announcementsData, setAnnouncementsData] = useState([]);
  const [companiesData, setCompaniesData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [playbillData, setPlaybillData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let reversedNews = [...tempNews].reverse();
    setNewsData(reversedNews)

    // mainApi
    //   .getNews()
    //   .then((res) => {
    //     let newsArray = res.reverse();
    //     setNewsData(newsArray);
    //   })
    //   .catch((res) => {
    //     console.log(res);
    //     setServerError(true);
    //   });
    // mainApi.getAnnouncements().then((res) => setAnnouncementsData(res));
    // mainApi.getCompanies().then((res) => setCompaniesData(res));
    // mainApi.getFeedback().then((res) => setFeedbackData(res));
    // mainApi.getPeople().then((res) => setPeopleData(res));
    // mainApi.getSchedule().then((res) => setScheduleData(res));
    // mainApi.getPlaybill().then((res) => setPlaybillData(res));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchValue(search);
  };

  ///настроить поиск по разным страницам

  const showSearchedNews = newsData.filter((data) => {
    if (searchValue !== "") {
      return data.header.toLowerCase().includes(searchValue);
    } else return newsData;
  });

  const showSearchedPosters = dataPosters.filter((data) => {
    if (searchValue !== "") {
      return data.name.toLowerCase().includes(searchValue);
    } else return dataPosters;
  });

  const showSearchedSchedule = dataEvent.filter((data) => {
    if (searchValue !== "") {
      return data.name.toLowerCase().includes(searchValue);
    } else return dataEvent;
  });

  return (
    <>
    {isLoading ? <Preloader /> :  
      <div className="page">
        {!serverError ? (
          <>
            <Header />
            <div className="main">
              <Routes>
                <Route
                  element={
                    <Main newsData={newsData} dataReviews={dataReviews} />
                  }
                  exact
                  path="/"
                />
                <Route
                  element={
                    <AllCards
                      search
                      setItemForRegistration={setItemForRegistration}
                      cardsData={showSearchedSchedule}
                      title="РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ"
                      handleSearch={handleSearch}
                    />
                  }
                  exact
                  path="/schedule"
                />
                <Route
                  element={
                    <AllCards
                      search
                      cardsData={showSearchedPosters}
                      setItemForRegistration={setItemForRegistration}
                      title="АФИША"
                    />
                  }
                  exact
                  path="/posters"
                />
                <Route
                  element={
                    <AllCards
                      search
                      cardsData={showSearchedNews}
                      title="НОВОСТИ"
                      handleSearch={handleSearch}
                    />
                  }
                  exact
                  path="/news"
                />
                <Route element={<Friends />} exact path="/friends" />
                <Route element={<Contacts />} exact path="/contacts" />
                <Route element={<Help />} exact path="/help" />
                <Route
                  exact
                  path="/singlenews/:id"
                  element={<SingleNews newsData={newsData} />}
                />
                <Route
                  element={
                    <Registration itemForRegistration={itemForRegistration} />
                  }
                  exact
                  path="/registration/:id"
                />
                <Route
                  element={<AllCards cardsData={dataReviews} title="ОТЗЫВЫ" />}
                  exact
                  path="/reviews"
                />
                <Route element={<ReviewSingle />} exact path="/reviews/:id" />
                <Route
                  element={<AddReview />}
                  exact
                  path="/reviews/add-review"
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/companies"
                  element={
                    <AllCards cardsData={dataCompany} title="КОМПАНИИ" />
                  }
                />
                <Route
                  path="/people"
                  element={<AllCards cardsData={dataPeople} title="ЛЮДИ" />}
                />
                <Route path="/payment" element={<Payment />} />
                <Route path="/thanks" element={<Thanks />} />
              </Routes>
            </div>
            <NavigationBlock />
            <Footer />
          </>
        ) : (
          <img className="serverError" src={serverErrorImg} alt="" />
        )}
      </div>
      }
    </>
  );
}

export default App;
