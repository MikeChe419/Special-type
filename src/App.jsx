import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import NavigationBlock from "./components/NavigationBlock/NavigationBlock";
import Footer from "./components/Footer/Footer";
import Friends from "./pages/Friends/Friends";
import Contacts from "./pages/Contacts/Contacts";
import Help from "./pages/Help/Help";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import Registration from "./pages/Registration/Registration";
import { Thanks } from "./pages/Thanks/Thanks";
import { mainApi } from "./utils/api/mainApi";
import AddReview from "./pages/AddReview/AddReview";
import { AllCards } from "./pages/AllCards/AllCards";
import Volunteering from "./pages/Volunteering/Volunteering";
import Modal from "./components/Modal/Modal";
import Payment from "./pages/Payment/Payment";

///временные данные
import dataSchedule from "./TEMP_SCHEDULE";
import dataPosters from "./TEMP_DATA_POSTERS";
import tempNews from "./TEMP_NEWS";
import dataCompany from "./TEMP_COMPANY";
import dataPeople from "./TEMP_PEOPLE";
import dataReviews from "./TEMP_REVIEWS";
///временные данные
import { Preloader } from "./components/Preloader/Preloadex";
import SinglePage from "./pages/SinglePage/SinglePage";

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
  const [isLoading, setIsLoading] = useState(false); //true на prod
  const [isOpened, setIsOpened] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    setNewsData(tempNews);
    setCompaniesData(dataCompany);
    setFeedbackData(dataReviews);
    setPeopleData(dataPeople);
    setScheduleData(dataSchedule);
    setPlaybillData(dataPosters);
    // mainApi
    //   .getNews()
    //   .then((res) => setNewsData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
    // mainApi
    //   .getCompanies()
    //   .then((res) => setCompaniesData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   });
    // mainApi
    //   .getFeedback()
    //   .then((res) => setFeedbackData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   });
    // mainApi
    //   .getPeople()
    //   .then((res) => setPeopleData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   });
    // mainApi
    //   .getSchedule()
    //   .then((res) => setScheduleData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   });
    // mainApi
    //   .getPlaybill()
    //   .then((res) => setPlaybillData(res.results))
    //   .catch((res) => {
    //     console.log(res);
    //     // setServerError(true);
    //   });
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchValue(search);
  };

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
    setDataForModal(data);
    setIsOpened(!isOpened);
  };

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
                    element={
                      <SinglePage
                        dataCard={newsData}
                        handleClickOpenModal={handleClickOpenModal}
                        label="Вернуться к списку новостей"
                      />
                    }
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
                  <Route
                    element={
                      <SinglePage
                        dataCard={feedbackData}
                        handleClickOpenModal={handleClickOpenModal}
                        label="Отзывы / Подробный отзыв"
                      />
                    }
                    exact
                    path="/reviews/:id"
                  />
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
              <Modal
                isOpened={isOpened}
                handleClickOpenModal={handleClickOpenModal}
                dataForModal={dataForModal}
              />
            </>
          ) : (
            <div className="serverError">
              <div className="serverError__container">
                <div className="serverError__logo" />
                <p className="serverError__text">Похоже, что-то сломалось...</p>
                <p className="serverError__text">
                  И мы уже устраняем проблему!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
