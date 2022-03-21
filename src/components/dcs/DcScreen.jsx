import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/AuthReducer";

export const DcScreen = () => {

  const {authState, setAuthState} = useContext(AuthContext);

  const algo = 'feasdr';
  const handleState = () => {
   setAuthState({...authState,nombre:algo});
  }
  
  return (
    <>
      <h1>DcScreen</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        saepe animi at, ullam odio accusantium quas veniam. Quo, illum veniam ad
        sit sint similique adipisci officiis, est esse libero neque.
      </p>
      <pre>
        {JSON.stringify(authState, null, 3)}
      </pre>
      <button
      className="btn btn-primary"
      onClick={()=>handleState()}
      >
        State
      </button>
    </>
  );
};
