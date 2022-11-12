import './AllNews.sass'
import  dataNews  from '../../TEMP_NEWS'


const AllNews = () => {



  return (
    <div className="AllNews__content">

      {dataNews.map(news => (<div className="AllNews-card" key={news.id}>
        <p className='news-card__create-date'>{news.createDate}</p>
        <h3 className='news-card__title'>{news.name}</h3>
        <p className='news-card__text'>{news.text}</p>
        <button className='news-card__button'>читать дальше </button>
        <img className='news-card__img' alt=''></img>
      </div>))}



    </div>
  )
}

export default AllNews