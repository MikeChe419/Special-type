import './styles/@global.sass';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header'
import NavigationBlock from './components/NavigationBlock/NavigationBlock';
import Footer from './components/Footer/Footer';
import Schedule from './pages/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Schedule />} path='/schedule' />
      </Routes>
      <NavigationBlock />
      <Footer />
    </div>
  );
}

export default App;

