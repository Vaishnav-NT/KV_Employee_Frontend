import './styles.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-item'>
        <div className='icon-div'>
          <img className='logo-img' src='assets/icons/employees.svg' />
        </div>
        Employee List
      </div>
    </div>
  );
};

export default NavBar;
