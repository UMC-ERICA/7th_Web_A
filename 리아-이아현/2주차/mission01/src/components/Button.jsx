const Button = ({ onClick, buttonText, type = "button" }) => {
  return (
    <button onClick={onClick} type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
