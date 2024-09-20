import PropTypes from "prop-types";
import styles from "./testimonialsCard.module.css";
import { StarFillIcon } from "../assets/icons.jsx";

function TestimonialsCard({ imgSrc, name, comment }) {
  return (
    <article className={styles.card}>
      <header>
        <img src={imgSrc} alt={name} />
        <div>
          <h4>{name}</h4>
          <p className={styles.rating}>
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
          </p>
        </div>
      </header>
      <p>{comment}</p>
    </article>
  );
}

TestimonialsCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default TestimonialsCard;
