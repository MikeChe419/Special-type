import './Main.sass';
import About from '../../components/About/About';
import NewsCard from '../../components/NewsCard/NewsCard';
import Reviews from '../../components/Reviews/Reviews';


const Main = ({newsData, feedbackData}) => {
  return (
    <div className="main">
      <About />
      <section className="news">
        <h2 className='news__title'>новости</h2>
        <div className="news__content">
          <NewsCard newsData={newsData} />
        </div>
      </section>
      <Reviews feedbackData={feedbackData}/>
    </div>
  )
}

export default Main;