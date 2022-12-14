import "./FriendsList.sass";
import { GoBackButton } from "../GoBackButton/GoBackButton";
import { useLocation } from "react-router-dom";
import ImageMasked from "../ImageMasked/ImageMasked";

export const FriendsList = ({ friendsData }) => {
  let location = useLocation();

  for (let i = 0; i < friendsData.length; i++) {
    return (
      <div className="friendsList">
        {location.pathname == "/companies" ? (
          <GoBackButton label="Главная страница / Друзья / Компании" />
        ) : (
          <GoBackButton label="Главная страница / Друзья / Люди" />
        )}

        <div className="friendsList__cards">
          {friendsData.map((data) => (
            <div className="friendsList-card" key={data.id}>
              <ImageMasked item={data} lable="company" />
              <h2 className="friendsList-card__title">
                {data.name ? data.name : data.first_name + " " + data.last_name}
              </h2>
              <p className="friendsList-card__text">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
};
