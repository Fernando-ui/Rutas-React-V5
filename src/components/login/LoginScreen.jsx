import React, { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import { ACTION } from "../../actions/actions";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastView');
    (!lastPath)?
      history.replace("/") : history.replace(`${lastPath}`) ;
    
    dispatch({
      type: ACTION.LOGIN,
      payload: { name: "Fernando", apellido: "sosa" },
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-warning" onClick={() => handleLogin()}>
        Ingresar
      </button>
    </div>
  );
};
