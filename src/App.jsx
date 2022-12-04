import "./styles/@global.sass";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import NavigationBlock from "./components/NavigationBlock/NavigationBlock";
import Footer from "./components/Footer/Footer";
import Schedule from "./pages/Schedule/Schedule";
import Posters from "./pages/Posters/Posters";
import AllNews from "./pages/AllNews/AllNews";
import Friends from "./pages/Friends/Friends";
import Contacts from "./pages/Contacts/Contacts";
import Help from "./pages/Help/Help";
import { SingleNews } from "./pages/SingleNews/SingleNews";
import { NotFound } from "./pages/NotFound/NotFount";
import Registration from "./pages/Registration/Registration";
import { Companies } from "./pages/Сompanies/Companies";
import ReviewsAll from "./pages/ReviewsAll/ReviewsAll";
import ReviewSingle from "./pages/ReviewSingle/ReviewSingle";
import { Payment } from "./pages/Payment/Payment";
import { Thanks } from "./pages/Thanks/Thanks";
import { mainApi } from "./utils/api/mainApi";
import tempNews from "./TEMP_NEWS";

function App({ id }) {
  console.log(tempNews, 'test')
  const [itemForRegistration, setItemForRegistration] = useState({});

  const [newsData, setNewsData] = useState([])
  const [announcementsData, setAnnouncementsData] = useState([])
  const [companiesData, setCompaniesData] = useState([])
  const [feedbackData, setFeedbackData] = useState([])
  const [peopleData, setPeopleData] = useState([])
  const [scheduleData, setScheduleData] = useState([])
  const [playbillData, setPlaybillData] = useState([])

  useEffect(() => {
   
    let reversedNews = [...tempNews].reverse()
    console.log(reversedNews, '22222222222')
    setNewsData(reversedNews)
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
  return (
    <div className="page">
      <Header />
      <div className="main">
        <Routes>
          <Route element={<Main newsData={newsData} feedbackData={feedbackData}/>} exact path="/" />
          <Route
            element={
              <Schedule setItemForRegistration={setItemForRegistration} />
            }
            exact
            path="/schedule"
          />
          <Route
            element={
              <Posters setItemForRegistration={setItemForRegistration} />
            }
            exact
            path="/posters"
          />
          <Route element={<AllNews newsData={newsData}/>} exact path="/news" />
          <Route element={<Friends />} exact path="/friends" />
          <Route element={<Contacts />} exact path="/contacts" />
          <Route element={<Help />} exact path="/help" />
          <Route exact path="/singlenews/:id" element={<SingleNews newsData={newsData}/>} />
          <Route
            element={<Registration itemForRegistration={itemForRegistration} />}
            exact
            path="/registration/:id"
          />
          <Route element={<ReviewsAll />} exact path="/reviews" />
          <Route element={<ReviewSingle />} exact path="/reviews/:id" />
          <Route path="*" element={<NotFound />} />
          <Route path="/companies" element={<Companies />} />
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
