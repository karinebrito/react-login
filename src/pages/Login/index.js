import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiEye, HiEyeOff } from  'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { setName, setUsername, setEmail, setPhone, setIsLoggedIn } from '../../store/reducer';
import './login.css';

const auth = {
  username: "Fernando",
  password: "123456",
  name: "Fernando Sousa",
  email: "fernando@gmail.com",
  phone: "(85) 9999-9999"
}


function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  const handlePasswordVisibility = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (auth.username === user && auth.password === password) {
      setErrorMessage("");
      dispatch(setName(auth.name));
      dispatch(setUsername(auth.username));
      dispatch(setEmail(auth.email));
      dispatch(setPhone(auth.phone));
      dispatch(setIsLoggedIn(true));
      history.replace('/home');

    } else {
      setErrorMessage('Seus dados estão incorretos.');
    }
  }

  return (
    <div className="login">
      <div className="login-name-login">
        <h1>Login</h1>

        <div className="login-input-user">
          <input
            type="text"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="login-input-password">
          <input
            type={show ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye">
            { show ? (
              <HiEye size={20} onClick={handlePasswordVisibility}/>
              ) : (
              <HiEyeOff size={20} onClick={handlePasswordVisibility}/>
              )
            }
          </div>
        </div>
        { errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
        <button type="submit" onClick={onSubmitClick}>Acessar</button>
      </div>
    </div>
  );
}

export default Login;
