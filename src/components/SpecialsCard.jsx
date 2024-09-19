import styles from "./specialsCard.module.css";
import { BicycleIcon } from "../assets/icons.jsx";

function SpecialsCard({ imgSrc, label, price, description }) {
  return (
    <a href="#" className={styles.card}>
      <article>
        <img src={imgSrc} alt={label} />
        <div className={styles.body}>
          <header>
            <h5>{label}</h5>
            <p className="text-lead">${price}</p>
          </header>
          <p className={styles.description}>{description}</p>
          <p className="text-highlight">
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
          </p>
        </div>
      </article>
    </a>
  );
}

export default SpecialsCard;
