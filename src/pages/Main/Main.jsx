import './Main.sass';
import About from '../../components/About/About';
import NewsCard from '../../components/NewsCard/NewsCard';
import Reviews from '../../components/Reviews/Reviews';


const Main = () => {
  return (
    <div className="main">
      <About />
      <section className="news">
        <h2 className='news__title'>новости</h2>
        <div className="news__content">
          <NewsCard />
        </div>
      </section>
      <Reviews />
    </div>
  )
}

export default Main;