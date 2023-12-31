import './styles.css';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../services/loginAPI';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const [login, { data: loginData, isSuccess }] = useLoginMutation();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onClickHandler = () => {
    if (username.length > 0 && password.length > 0) login({ username, password });
    else setShowError(true);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('AuthToken', loginData.data.token);

      console.log('dataaaa', loginData.data.employee);

      navigate('/employees');
    }
  }, [loginData, isSuccess]);

  return (
    <div className='container'>
      <div className='hero-image-div'>
        <img src='assets/img/banner.png' />
      </div>
      <div className='login-form-div'>
        <div className='login-form'>
          <div>
            <img src='assets/img/kv-logo.png' />
          </div>
          <Input type='text' value={username} onChange={handleUsernameChange} label={'Username'} />
          <Input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            label={'Password'}
          />
          <Button type='primary' label='Login' onClick={onClickHandler} />
          {showError && (
            <div className='error-msg'>
              Username and password must contain atleast one character
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
