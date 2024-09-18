import styles from "./testimonialsCard.module.css";
import { StarFillIcon } from "../assets/icons.jsx";

function TestimonialsCard({ imgSrc, name, saying }) {
  return (
    <article className={styles.card}>
      <header>
        <img src={imgSrc} />
        <div>
          <h4>{name}</h4>
          <p className="text-primary-light">
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

export default TestimonialsCard;
