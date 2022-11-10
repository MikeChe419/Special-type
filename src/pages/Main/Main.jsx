import './Main.sass';
import About from '../../components/About/About';
import Header from '../../components/Header/Header'
import NavigationBlock from '../../components/NavigationBlock/NavigationBlock';
import Footer from '../../components/Footer/Footer'
import News from '../../components/News/News';


const Main = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <News />
      <NavigationBlock />
      <Footer />
    </div>
  )
}

export default Main;