import '../../styles/global.sass';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="content">
      <Routes >
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/reviews' />
        <Route exact path='/shedule' />
      </Routes>
    </div>
  );
}

export default App;
