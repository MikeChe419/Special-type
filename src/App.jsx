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
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import Registration from "./pages/Registration/Registration";
import ReviewSingle from "./pages/ReviewSingle/ReviewSingle";
import { Thanks } from "./pages/Thanks/Thanks";
import { mainApi } from "./utils/api/mainApi";
import AddReview from "./pages/AddReview/AddReview";
import { AllCards } from "./pages/AllCards/AllCards";
import serverErrorImg from "./assets/images/serverError.jpg";
import Volunteering from "./pages/Volunteering/Volunteering";
import Modal from "./components/Modal/Modal"
import Payment from "./pages/Payment/Payment";

///временные данные
// import dataEvent from "./TEMP_EVENT";
// import dataPosters from "./TEMP_DATA_POSTERS";
// import tempNews from "./TEMP_NEWS";
// import dataCompany from "./TEMP_COMPANY";
// import dataPeople from "./TEMP_PEOPLE";
// import dataReviews from "./TEMP_REVIEWS";
///временные данные
import { Preloader } from "./components/Preloader/Preloadex";

function App({ id }) {
  const [itemForRegistration, setItemForRegistration] = useState({});
  const [newsData, setNewsData] = useState([]); //массив
  const [companiesData, setCompaniesData] = useState([]); //объект
  const [feedbackData, setFeedbackData] = useState([]); //объект
  const [peopleData, setPeopleData] = useState([]); //объект
  const [scheduleData, setScheduleData] = useState([]); //нет images
  const [playbillData, setPlaybillData] = useState([]); //нет images
  const [searchValue, setSearchValue] = useState("");
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [dataForModal, setDataForModal] = useState({})

  useEffect(() => {
    // let reversedNews = [...tempNews].reverse();
    // setNewsData(reversedNews);

    mainApi
      .getNews()
      .then((res) => {
        setNewsData(res.results)
      })
      .catch((res) => {
        console.log(res);
        setServerError(true);
      });
    mainApi.getCompanies().then((res) => setCompaniesData(res.results));
    mainApi.getFeedback().then((res) => setFeedbackData(res.results));
    mainApi.getPeople().then((res) => setPeopleData(res.results));
    mainApi.getSchedule().then((res) => setScheduleData(res.results));
    mainApi.getPlaybill().then((res) => setPlaybillData(res.results));
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

  const showSearchedPosters = playbillData.filter((data) => {
    if (searchValue !== "") {
      return data.name.toLowerCase().includes(searchValue);
    } else return playbillData;
  });

  const showSearchedSchedule = scheduleData.filter((data) => {
    if (searchValue !== "") {
      return data.name.toLowerCase().includes(searchValue);
    } else return scheduleData;
  });

  // Обработчик клика по картинке в отдельном ревью для открытия модального окна с фото
  const handleClickOpenModal = (data = {}) => {
    setDataForModal(data)
    setIsOpened(!isOpened);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="page">
          {!serverError ? (
            <>
              <Header />
              <div className="main">
                <Routes>
                  <Route
                    element={
                      <Main newsData={newsData} dataReviews={feedbackData} />
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
                  <Route element={<Volunteering />} path="/help/volunteering" />
                  <Route element={<Payment />} path="/payment" />
                  <Route
                    exact
                    path="/singlenews/:id"
                    element={<SingleNews newsData={newsData} handleClickOpenModal={handleClickOpenModal} />}
                  />
                  <Route
                    element={
                      <Registration itemForRegistration={itemForRegistration} />
                    }
                    exact
                    path="/registration/:id"
                  />
                  <Route
                    element={
                      <AllCards cardsData={feedbackData} title="ОТЗЫВЫ" />
                    }
                    exact
                    path="/reviews"
                  />
                  <Route element={<ReviewSingle dataReviews={feedbackData} handleClickOpenModal={handleClickOpenModal} />} exact path="/reviews/:id" />
                  <Route
                    element={<AddReview />}
                    exact
                    path="/reviews/add-review"
                  />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route
                    path="/companies"
                    element={
                      <AllCards cardsData={companiesData} title="КОМПАНИИ" />
                    }
                  />
                  <Route
                    path="/people"
                    element={<AllCards cardsData={peopleData} title="ЛЮДИ" />}
                  />
                  <Route path="/thanks" element={<Thanks />} />
                </Routes>
              </div>
              <NavigationBlock />
              <Footer />
              <Modal isOpened={isOpened} handleClickOpenModal={handleClickOpenModal} dataForModal={dataForModal} />
            </>
          ) : (
            <img className="serverError" src={serverErrorImg} alt="" />
          )}
        </div>
      )}
    </>
  );
}

export default App;
