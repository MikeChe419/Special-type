import "./Posters.sass";
import Poster from "../../components/Poster/Poster";
// Удалить импорт после добавления логики (данных с бэка)
import tempFoto from "./tempFoto.jpeg";

const Posters = ({ setItemForRegistration }) => {
  // Временные данные для отрисовки необходимого количества событий
  // удалить после добавления данных с бэка
  const TEMP_DATA_POSTERS = [
    {
      name: "В начале было соло 1",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 1,
    },
    {
      name: "В начале было соло 2",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 2,
    },
    {
      name: "В начале было соло 3",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 3,
    },
    {
      name: "В начале было соло 4",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 4,
    },
    {
      name: "В начале было соло 5",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 5,
    },
    {
      name: "В начале было соло 6",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 6,
    },
    {
      name: "В начале было соло 7",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 7,
    },
    {
      name: "В начале было соло 8",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 8,
    },
    {
      name: "В начале было соло 9",
      startTime: "14:00",
      price: 1000,
      address: "ДК ТЮЗ, ул Яшко д 24",
      image: tempFoto,
      id: 9,
    },
    {
      name: "В начале было соло 10",
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
      <ul className="posters__container">
        {
          TEMP_DATA_POSTERS.map(poster => <Poster poster={poster} key={poster.id} setItemForRegistration={setItemForRegistration} />)
        }
      </ul>
    </div>
  );
};

export default Posters;

