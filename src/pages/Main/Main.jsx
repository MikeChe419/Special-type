import './Main.sass';
import About from '../../components/About/About';
import Header from '../../components/Header/Header'
import NavigationBlock from '../../components/NavigationBlock/NavigationBlock';
import Footer from '../../components/Footer/Footer'
import News from '../../components/News/News';
import Reviews from '../../components/Reviews/Reviews';


const Main = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <News />
      <Reviews />
      <NavigationBlock />
      <Footer />
    </div>
  )
}

export default Main;