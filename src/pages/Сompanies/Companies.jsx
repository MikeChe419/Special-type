import './Companies.sass'
import tempPhoto from './tempFoto.jpeg'
import dataCompany from '../../TEMP_COMPANY'
import { useState, useEffect } from 'react'
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';

export const Companies = () => {
  const [dataCount, setDataCount] = useState(3)
  const [dataList, setDataList] = useState([]);
  const isTablet = useMediaQuery('(max-width: 999px)');
  const isMobile = useMediaQuery('(max-width: 500px)');

  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      setDataCount(4)
    } else if (isTablet) {
      setDataCount(6)
    } else setDataCount(10)
  }, [isMobile, isTablet])

  useEffect(() => {
    setDataList(dataCompany.slice(0, dataCount));
  }, [setDataList, dataCount])

  return (
    <div className="companies">
      <GoBackButton label='Главная страница / Друзья / Компании'/>
      <h1 className="companies__title">КОМПАНИИ</h1>
      <div className="companies__cards">
        {dataList.map(data => (<div className="companies-card" key={data.id}>
          <img className='companies-card__img' alt='' src={tempPhoto}></img>
          <h2 className='companies-card__title'>{data.name}</h2>
          <p className='companies-card__text'>{data.text}</p>
        </div>))}

      </div>
      <Pagination />
    </div>
  )
}

