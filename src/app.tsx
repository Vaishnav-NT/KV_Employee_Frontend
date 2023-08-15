import './styles/global.css';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import EmployeeListPage from './pages/employeeListPage/EmployeeListPage';
import EmployeeDetailsPage from './pages/employeeDetailsPage/EmployeeDetailsPage';
import CreateEmployeePage from './pages/createEmployeePage/createEmployeePage';
import EditEmployeePage from './pages/editEmployeePage/EditEmployeePage';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/employees' element={<EmployeeListPage />}></Route>
          <Route path='/employees/create' element={<CreateEmployeePage />}></Route>
          <Route path='/employees/:id' element={<EmployeeDetailsPage />}></Route>
          <Route path='/employees/edit/:id' element={<EditEmployeePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
