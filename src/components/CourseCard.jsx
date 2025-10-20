import PropTypes from "prop-types";

export function CourseCard({ title, description, price, image, imageAlt }) {
  return (
    <div className="course-card">
      <img
        src={image || "/placeholder.svg"}
        alt={imageAlt}
        className="course-image"
      />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="course-footer">
          <span className="course-price">{price}</span>
          <button className="course-btn">Записаться</button>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};
