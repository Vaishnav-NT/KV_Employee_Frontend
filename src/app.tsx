import type { FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/loginPage/LoginPage';
import EmployeePage from './pages/employeePage/EmployeePage';
import DetailsPage from './pages/detailsPage/DetailsPage';
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
          <Route path='/employees' element={<EmployeePage />}></Route>
          <Route path='/employees/:id' element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
