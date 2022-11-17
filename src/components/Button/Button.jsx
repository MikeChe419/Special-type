import './Button.sass';
import { Link } from 'react-router-dom';

// Принимает в качестве пропсов текст для кнопки и ширину
const Button = ({ title, width, route }) => {
  return(
    <Link to={route}>
      <button className="button" style={{'width': `${width}`}} onClick= {()=> `${route}`}>{title}</button>
    </Link>
  )
}

export default Button;