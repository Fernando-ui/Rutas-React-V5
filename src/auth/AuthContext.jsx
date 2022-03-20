import { createContext } from "react";

const AuthContext = createContext({
  info: "",
  logged: true,
 
});
export default AuthContext;
