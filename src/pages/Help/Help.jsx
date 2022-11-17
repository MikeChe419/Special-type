import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Help.sass'

const Help = () => {
  return (
    <section className='help'>
      <h1 className='help__title'>
        Как помочь проекту?
      </h1>
      <div className='help__intro-container'>
        <div className='help__left-intro-container'>
          <p className='help__left-intro-desqr'>
            Мы делаем все, чтобы помогать было легко и удобно. Каждый может выбрать то, что подходит ему больше всего.
          </p>
        </div>
        <div className='help__right-intro-container'>
            <span className='help__right-intro-quote'> &#8222; Не упускайте случая делать добро. &#8220;</span>
            <span className='help__right-intro-author'>Марк Твен</span>
        </div>
      </div>
  </section>
  )

}

export default Help