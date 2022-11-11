import './styles/@global.sass';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header'
import NavigationBlock from './components/NavigationBlock/NavigationBlock';
import Footer from './components/Footer/Footer';
import Schedule from './pages/Schedule/Schedule';
import AllNews from './pages/AllNews/AllNews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Schedule />} path='/schedule' />
        <Route element={<AllNews />} path='/news' />
      </Routes>
      <NavigationBlock />
      <Footer />
    </div>
  );
}

export default App;

