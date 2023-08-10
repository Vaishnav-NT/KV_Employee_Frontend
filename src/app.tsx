import type { FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/loginPage/LoginPage';
import EmployeePage from './pages/employeePage/EmployeePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/employees' element={<EmployeePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
