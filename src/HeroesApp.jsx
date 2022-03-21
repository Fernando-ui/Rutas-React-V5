import React, { useState } from "react";
import { AppRouter } from "./routers/AppRouter";
import AuthReducer from "./components/auth/AuthReducer";

export const HeroesApp = () => {
  const [authState, setAuthState] = useState({});
  return (
    <>
      <AuthReducer.Provider
        value={{
          authState,
          setAuthState,
          payload:{},
        }}
      >
        <AppRouter />;
      </AuthReducer.Provider>
    </>
  );
};
