import React from "react";

export const LoginScreen = ({ history}) => {
  const handleLogin = () => {
  history.replace('/');
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
