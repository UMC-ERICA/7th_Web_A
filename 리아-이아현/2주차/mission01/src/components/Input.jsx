import styles from "./Input.module.css";

const Input = ({ value, onChange, className }) => {
  return <input type="text" value={value} onChange={onChange} className={styles[className]} />;
};

export default Input;
