import './FriendsList.sass'
import tempPhoto from "./tempFoto.jpeg";
import { useState, useEffect } from "react";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import Pagination from "../Pagination/Pagination";
import { GoBackButton } from "../GoBackButton/GoBackButton";

export const FriendsList = ({friendsData, title}) => {

    const [dataCount, setDataCount] = useState(3);
    const [dataList, setDataList] = useState([]);
    const isTablet = useMediaQuery("(max-width: 999px)");
    const isMobile = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        if (isMobile) {
          setDataCount(4);
        } else if (isTablet) {
          setDataCount(6);
        } else setDataCount(10);
      }, [isMobile, isTablet]);
    
      useEffect(() => {
        setDataList(friendsData.slice(0, dataCount));
      }, [setDataList, dataCount]);

      return (
        <div className="friendsList">
          <GoBackButton label="Главная страница / Друзья / Компании" />
          {/* <h1 className="friendsList__title"></h1> */}
          <div className="friendsList__cards">
            {dataList.map((data) => (
              <div className="friendsList-card" key={data.id}>
                <img className="friendsList-card__img" alt="" src={tempPhoto}></img>
                <h2 className="friendsList-card__title">{data.name ? data.name : data.firstName}</h2>
                <h2 className="friendsList-card__title">{data.name ? '' : data.lastName}</h2>
                
                <p className="friendsList-card__text">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    