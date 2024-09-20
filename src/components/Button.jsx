import PropTypes from "prop-types";
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

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
