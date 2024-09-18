import styles from "./specialsCard.module.css";
import { BicycleIcon } from "../assets/icons.jsx";

function SpecialsCard({ imgSrc, label, price, description }) {
  return (
    <article className={styles.card}>
      <img src={imgSrc} alt={label} />
      <div className={styles.body}>
        <header>
          <h5>{label}</h5>
          <p className="text-lead">${price}</p>
        </header>
        <p>{description}</p>
        <p className="text-highlight">
          <a href="#">
            Order for delivery
            <span
              style={{
                color: "#495e57",
                fontSize: "1.5rem",
                marginLeft: "0.75rem",
              }}
            >
              <BicycleIcon />
            </span>
          </a>
        </p>
      </div>
    </article>
  );
}

export default SpecialsCard;
