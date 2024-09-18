import styles from "./card.module.css";

function Card({ imgSrc, label, price, description }) {
  return (
    <article className={styles.card}>
      <img src={imgSrc} />
      <div className={styles.body}>
        <div className={styles.header}>
          <h5>{label}</h5>
          <p className="text-lead">${price}</p>
        </div>
        <p>{description}</p>
        <p className="text-highlight">Order for delivery</p>
      </div>
    </article>
  );
}

export default Card;
