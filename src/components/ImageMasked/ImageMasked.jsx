import getMask from '../../utils/getMask/getMask';
import './ImageMasked.sass';
import plugSchedule from "../../assets/images/plugs/plugSchedule.png";

// Принимает объект: новость, отзыв и так далее, внутри которого есть id, image и name
const ImageMasked = ({item}) => {

  // Генерация уникального id для маски. Если у объектов будет уникальный id, эту функцию нужно убрать
  const generateMaskId = (id) => {
    const maskId = `mask-${id}`;
    return maskId
  }

  return (
    <>
      <div className="image-masked__container">
        <img className="image-masked__img" src={item.image ? item.image : plugSchedule} alt={item.user} style={{ clipPath: `url(#${generateMaskId(item.id)})` }} />
      </div>
      {getMask(generateMaskId(item.id))}
    </>
  )
}

export default ImageMasked;