import "./ReviewSingle.sass";
import { useParams } from "react-router-dom";
import getMask from "../../utils/getMask/getMask";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import ImageMasked from "../../components/ImageMasked/ImageMasked";
import { NotFound } from "../../components/NotFound/NotFound";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const ReviewSingle = ({ dataReviews, handleClickOpenModal }) => {
  const { id } = useParams();
  const review = dataReviews.find((item) => item.id == id);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const onClick = () => {
    handleClickOpenModal(review);
  };

  return (
    <>
      <GoBackButton label="Отзывы / Подробный отзыв" />
      <section className="review-single">
        {review ? (
          <div className="review-single__block">
            <div className="review-single__review-block">
              {!isMobile ? (
                <>
                  {" "}
                  <h2 className="review-single__date">
                    {review.date
                      ? review.date.slice(0, 10).replace(/-/g, ".")
                      : ""}
                  </h2>
                  <h1 className="review-single__user">
                    {review.name.toLocaleUpperCase()}
                  </h1>
                </>
              ) : (
                ""
              )}

              <p className="review-single__text">{review.description}</p>
            </div>
            <div className="review-single__image-container" onClick={onClick}>
              <ImageMasked item={review} />
            </div>
          </div>
        ) : (
          <NotFound />
        )}
        {getMask("review")}
      </section>
    </>
  );
};

export default ReviewSingle;
