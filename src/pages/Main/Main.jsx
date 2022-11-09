import './Main.sass';
import About from '../../components/About/About';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


const Main = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default Main;