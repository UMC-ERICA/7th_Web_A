import styles from "./Button.module.css";

const Button = ({ onClick, buttonText, type = "button", className }) => {
  return (
    <button onClick={onClick} type={type} className={styles[className]}>
      {buttonText}
    </button>
  );
};

export default Button;
