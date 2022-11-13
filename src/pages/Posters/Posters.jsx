import "./Posters.sass";
import Poster from "../../components/Poster/Poster";
// Удалить импорт после добавления логики (данных с бэка)
import tempFoto from "./tempFoto.jpeg";

const Posters = () => {
  // Временные данные для отрисовки необходимого количества событий
  // удалить после добавления данных с бэка
  const TEMP_DATA_POSTERS = [
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 1,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 2,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 3,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 4,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 5,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 6,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 7,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 8,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 9,
    },
    {
      title: "В начале было соло",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 10,
    },
  ]

  return (
    <div className="posters">
      <h2 className="posters__title">АФИША</h2>
      <div className="posters__container">
        {
          TEMP_DATA_POSTERS.map(poster => <Poster poster={poster} key={poster.id} />)
        }
      </div>
    </div>
  );
};

export default Posters;

