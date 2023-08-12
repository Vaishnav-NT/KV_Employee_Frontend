import type { FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/loginPage/LoginPage';
import EmployeeListPage from './pages/employeeListPage/EmployeeListPage';
import EmployeeDetailsPage from './pages/employeeDetailsPage/EmployeeDetailsPage';
import CreateEmployeePage from './pages/createEmployeePage/createEmployeePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ElementTest from './pages/ElementTest';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ElementTest />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/employees/create' element={<CreateEmployeePage />}></Route>
          <Route path='/employees' element={<EmployeeListPage />}></Route>
          <Route path='/employees/:id' element={<EmployeeDetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
