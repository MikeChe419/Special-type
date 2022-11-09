import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './about.sass';
import aboutImg from '../../assets/images/aboutImg.png'
import aboutLogo from '../../assets/images/logoAbout.png'

import fondOne from '../../assets/images/fondLogo2.svg'
import fondTwo from '../../assets/images/fondLogo1.svg'


function About() {

  return (
    <section className="about">
      <div className="about__content">
        <img src={aboutImg} alt="" className="about__img" />
        <div className="about__text-block">
          <img src={aboutLogo} alt="" className="about__logo" />
          <h1 className="about__title"> <span className="title-span">первый</span>  инклюзивный <span className="title-span">театральный</span> проект
            <span className="title-span"> в Новосибирске</span></h1>
          <p className="about__text">Изучаем себя, людей и мир вокруг
            Развиваем инициативу каждого участника
            Занятия проходят в онлайн и оффлайн в Бердске.
            <br />
            <br />

            Проект для детей, и взрослых с инвалидностью и без, есть семейное направление.
            <br />
            <br />
            Занятия бесплатные.</p>

          <div className="about__fonds">
            <img src={fondOne} alt="" className="about__fond" />
            <img src={fondTwo} alt="" className="about__fond" />
          </div>
        </div>
      </div>


    </section>
  );
}

export default About;