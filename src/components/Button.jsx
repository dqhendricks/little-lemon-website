import styles from "./button.module.css";

function Button({
  children,
  className = "",
  variant = "primary",
  handleClick = null,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
