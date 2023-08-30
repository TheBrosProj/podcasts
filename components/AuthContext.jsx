import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    auth.onAuthStateChanged(u => {
        if (u) {
            setUser(u);
        } 
        else {
            setUser(null);
        }
      })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
