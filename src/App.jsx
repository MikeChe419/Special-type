import './styles/@global.sass';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/' />
      </Routes>
    </div>
  );
}

export default App;

