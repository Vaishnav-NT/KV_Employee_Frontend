import './styles.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const hanldeClick = () => {
    navigate('/employees');
  };

  return (
    <div className='navbar'>
      <div className='nav-item' onClick={hanldeClick}>
        <div className='icon-div'>
          <img className='logo-img' src='assets/icons/employees.svg' />
        </div>
        Employee List
      </div>
    </div>
  );
};

export default NavBar;
