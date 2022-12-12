import './Button.sass';
import { Link } from 'react-router-dom';

// Принимает в качестве пропсов текст для кнопки и ширину
const Button = ({ title, width, route }) => {
  return(
    <Link to={route}>
    <button style={{width: `${width}`}}  className="button" onClick={()=> `${route}`}>{title}</button>
    </Link>
  )
}

export default Button;