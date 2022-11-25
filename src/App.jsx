import "./styles/@global.sass";
import { Routes, Route } from "react-router-dom";
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

function App({ id }) {
  console.log(id)
  return (

    <div className="page">
      <Header />
      <div className="main">
        <Routes>
          <Route element={<Main />} exact path="/" />
          <Route element={<Schedule />} exact path="/schedule" />
          <Route element={<Posters />} exact path="/posters" />
          <Route element={<AllNews />} exact path="/news" />
          <Route element={<Friends />} exact path="/friends" />
          <Route element={<Contacts />} exact path="/contacts" />
          <Route element={<Help />} exact path="/help" />
          <Route path='/singlenews/:id' element={<SingleNews />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <NavigationBlock />
      <Footer />
    </div>
  );
}

export default App;
