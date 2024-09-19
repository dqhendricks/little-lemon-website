import PropTypes from "prop-types";
import styles from "./testimonialsCard.module.css";
import { StarFillIcon } from "../assets/icons.jsx";

function TestimonialsCard({ imgSrc, name, saying }) {
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
      <p>{saying}</p>
    </article>
  );
}

TestimonialsCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
};

export default TestimonialsCard;
