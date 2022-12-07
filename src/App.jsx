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
import { NotFound } from "./pages/NotFound/NotFount";
import Registration from "./pages/Registration/Registration";
import ReviewsAll from "./pages/ReviewsAll/ReviewsAll";
import ReviewSingle from "./pages/ReviewSingle/ReviewSingle";
import { Payment } from "./pages/Payment/Payment";
import { Thanks } from "./pages/Thanks/Thanks";
import { mainApi } from "./utils/api/mainApi";
import AddReview from "./pages/AddReview/AddReview";
import { AllCards } from "./pages/AllCards/AllCards";

///временные данные
import dataEvent from "./TEMP_EVENT";
import dataPosters from "./TEMP_DATA_POSTERS";
import tempNews from "./TEMP_NEWS";
import dataCompany from "./TEMP_COMPANY";
import dataPeople from "./TEMP_PEOPLE";
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

  useEffect(() => {
    let reversedNews = [...tempNews].reverse();
    setNewsData(reversedNews);
    // mainApi.getNews()
    // .then((res) => {
    // let newsArray = res.reverse()
    // setNewsData(newsArray)});
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
    <div className="page">
      <Header />
      <div className="main">
        <Routes>
          <Route
            element={<Main newsData={newsData} feedbackData={feedbackData} />}
            exact
            path="/"
          />
          <Route
            element={
              <AllCards
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
            element={<Registration itemForRegistration={itemForRegistration} />}
            exact
            path="/registration/:id"
          />
          <Route element={<ReviewsAll />} exact path="/reviews" />
          <Route element={<ReviewSingle />} exact path="/reviews/:id" />
          <Route element={<AddReview />} exact path="/reviews/add-review" />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/companies"
            element={<AllCards cardsData={dataCompany} title="КОМПАНИИ" />}
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
    </div>
  );
}

export default App;
