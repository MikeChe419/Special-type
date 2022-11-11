import './Main.sass';
import About from '../../components/About/About';
import News from '../../components/News/News';
import Reviews from '../../components/Reviews/Reviews';


const Main = () => {
  return (
    <div className="main">
      <About />
      <News />
      <Reviews />
    </div>
  )
}

export default Main;