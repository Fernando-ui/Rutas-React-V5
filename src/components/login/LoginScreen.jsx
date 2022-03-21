import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const LoginScreen = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  console.log(history);
  
  
  const handleMarvel = () => {
    history.replace("/marvel");
  };
  const handleDC = () => {
    history.replace("/dc");
  };
  const handleLogOut = () => {
    history.replace("/logout");
    
  };
  const handleBack = () => {
    history.goBack();
  }
  

  return (
    <>
      <h1>LoginScreen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda
        voluptatum veniam fuga, perferendis a, expedita suscipit doloremque
        debitis enim eius ipsum similique quis voluptas corporis vero odio
        impedit magni.
      </p>
      <button className="btn btn-primary"
      onClick={()=> handleBack()}
      
      >
        Regreso
      </button>
      <button className="btn btn-primary" onClick={() => handleMarvel()}>
        Marvel
      </button>
      <button className="btn btn-primary" onClick={() => handleDC()}>
        DC
      </button>
      <button className="btn btn-primary" onClick={() => handleLogOut()}>
        LogOut
      </button>
    </>
  );
};
