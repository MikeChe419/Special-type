import './Button.sass';

// Принимает в качестве пропсов текст для кнопки и ширину
const Button = ({ title, width }) => {
  return(
    <button className="button" style={{'width': `${width}`}}>{title}</button>
  )
}

export default Button;