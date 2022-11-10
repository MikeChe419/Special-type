import './News.sass'


const News = () => {

  return (
    <section className="news">
      <h2 className='news__title'>новости</h2>

      <div className="news__content">

        <div className="news-card">
          <p className='news-card__create-date'>13.10.2022</p>
          <h3 className='news-card__title'>Телеграм канал
            Виктории Павловой</h3>
          <p className='news-card__text'>Друзья! У меня есть очень юный телеграм-канал, который ждёт своих подписчиков!
            <br />
            Вчера я там запустила проект "Сказки на ночь" (это для взрослых), каждый вечер буду публиковать сказки,
            читаю их я, может, вы оцените....</p>
          <button className='news-card__button'>читать дальше </button>
          <img className='news-card__img' alt=''></img>
        </div>

        <div className="news-card">
          <p className='news-card__create-date'>13.10.2022</p>
          <h3 className='news-card__title'>Телеграм канал
            Виктории Павловой</h3>
          <p className='news-card__text'>Друзья! У меня есть очень юный телеграм-канал, который ждёт своих подписчиков!
            <br />
            Вчера я там запустила проект "Сказки на ночь" (это для взрослых), каждый вечер буду публиковать сказки,
            читаю их я, может, вы оцените....</p>
          <button className='news-card__button'>читать дальше </button>
          <img className='news-card__img' alt=''></img>
        </div>

        <div className="news-card">
          <p className='news-card__create-date'>13.10.2022</p>
          <h3 className='news-card__title'>Телеграм канал
            Виктории Павловой</h3>
          <p className='news-card__text'>Друзья! У меня есть очень юный телеграм-канал, который ждёт своих подписчиков!
            <br />
            Вчера я там запустила проект "Сказки на ночь" (это для взрослых), каждый вечер буду публиковать сказки,
            читаю их я, может, вы оцените....</p>
          <button className='news-card__button'>читать дальше </button>
          <img className='news-card__img' alt=''></img>
        </div>

      </div>

    </section>
  )
}

export default News