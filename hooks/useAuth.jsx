import { useContext } from 'react';
import AuthContext from '../src/context/AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;