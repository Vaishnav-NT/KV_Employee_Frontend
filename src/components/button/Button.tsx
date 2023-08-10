import './styles.css';

const Button = ({ type, onClick, label }) => {
  return (
    <button className={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
