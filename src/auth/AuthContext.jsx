import { createContext } from "react";

const AuthContext = createContext({
  name: "",
  logged: true,
});
export default AuthContext;
