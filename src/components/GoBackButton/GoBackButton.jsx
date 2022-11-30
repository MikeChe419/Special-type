import './GoBackButton.sass'
import { useNavigate} from "react-router-dom";

export const GoBackButton = ({label = 'Вернуться назад'}) => {
    const navigate = useNavigate();

    return(
        <div className="goBackButton">
        <div className="goBackButton__button_type_img"></div>
        <button
          className="goBackButton__button"
          onClick={() => navigate(-1)}
        >
          &larr; {label}
        </button>
      </div>
    )
}