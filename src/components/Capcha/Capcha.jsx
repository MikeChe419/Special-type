import './Capcha.sass'
import { createCapchaLink } from '../../utils/capcha';

const Capcha = () => {
  return(
    <img src={createCapchaLink()} alt="" />
  )
}

export default Capcha;
