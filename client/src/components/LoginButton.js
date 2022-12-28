import React, {useState} from 'react';
import '../style/App.css';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const [login, setLogin] = useState("visible");

  // const history = useHistory();
  const navigate = useNavigate();
  
  const handleClick = () => {
      console.log(login, "login..")
      setLogin("hidden") 
    // history.push('/form');
    navigate('/form');
  };

  return (
   <div>
    <button className="log-btn" style={{visibility:login}} onClick={handleClick}>Login</button>
   </div>
  );
};

export default LoginButton;
