import "./Posters.sass";
import Poster from "../../components/Poster/Poster";


const Posters = ({ setItemForRegistration }) => {

  return (
    <div className="posters">
      <h2 className="posters__title">АФИША</h2>
      <ul className="posters__container">
        <Poster />
      </ul>
    </div>
  );
};

export default Posters;

 