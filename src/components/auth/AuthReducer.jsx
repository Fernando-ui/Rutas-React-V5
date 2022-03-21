import { createContext } from 'react';

const AuthContext = createContext({
    name:'',
    edad:0,
    log:false
});
export default AuthContext;