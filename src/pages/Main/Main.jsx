import './Main.sass';
import About from '../../components/About/About';
import Header from '../../components/Header/Header'
import NavigationBlock from '../../components/NavigationBlock/NavigationBlock';
import Footer from '../../components/Footer/Footer'


const Main = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <NavigationBlock />
      <Footer />
    </div>
  )
}

export default Main;