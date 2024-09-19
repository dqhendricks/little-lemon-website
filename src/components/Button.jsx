import styles from "./button.module.css";

function Button({
  children,
  variant = "primary",
  className = "",
  ...attributes
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Button;
