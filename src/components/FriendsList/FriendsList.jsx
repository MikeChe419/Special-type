import "./FriendsList.sass";
import { useState, useEffect } from "react";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { GoBackButton } from "../GoBackButton/GoBackButton";
import { useLocation } from "react-router-dom";
import plugCompanie from "../../assets/images/plugs/plugCompanie.png";

export const FriendsList = ({ friendsData }) => {
  let location = useLocation();

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
      {location.pathname == "/companies" ? (
        <GoBackButton label="Главная страница / Друзья / Компании" />
      ) : (
        <GoBackButton label="Главная страница / Друзья / Люди" />
      )}

      <div className="friendsList__cards">
        {dataList.map((data) => (
          <div className="friendsList-card" key={data.id}>
            <img
              className="friendsList-card__img"
              alt=""
              src={data.image ? data.image : plugCompanie}
            />
            <h2 className="friendsList-card__title">
              {data.name ? data.name : data.firstName + " " + data.lastName}
            </h2>
            <p className="friendsList-card__text">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
