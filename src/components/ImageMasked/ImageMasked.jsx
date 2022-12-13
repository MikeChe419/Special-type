import getMask from "../../utils/getMask/getMask";
import "./ImageMasked.sass";
import plugSchedule from "../../assets/images/plugs/plugSchedule.png";
import { getPlug } from "../../utils/getPlug";

// Принимает объект: новость, отзыв и так далее, внутри которого есть id, image и name
const ImageMasked = ({ item, lable }) => {

  //ВРЕМЕННО. Подстановка порта в ЮРЛ
  const itemImg = () => {
    let newImg = item.images[0].image.slice(22, 2000);
    let newImgUrl = `http://135.181.198.180:8080${newImg}`;
    return newImgUrl;
  };

  //ВРЕМЕННО. Подстановка порта в ЮРЛ

  
  // Генерация уникального id для маски. Если у объектов будет уникальный id, эту функцию нужно убрать
  const generateMaskId = (id) => {
    const maskId = `mask-${id}`;
    return maskId;
  };

  // Генерация картинки заглушки для каждой отдельной страницы
  const plugImg = getPlug(lable);

  return (
    <>
      <div className="image-masked__container">
        {item.images.length > 0 ? (
          <img
            className="image-masked__img"
            src={itemImg()}
            alt={item.user}
            style={{ clipPath: `url(#${generateMaskId(item.id)})` }}
          />
        ) : (
          <img
            className="image-masked__img"
            src={item.image ? item.image : plugImg}
            alt={item.user}
            style={{ clipPath: `url(#${generateMaskId(item.id)})` }}
          />
        )}
      </div>
      {getMask(generateMaskId(item.id))}
    </>
  );
};

export default ImageMasked;
