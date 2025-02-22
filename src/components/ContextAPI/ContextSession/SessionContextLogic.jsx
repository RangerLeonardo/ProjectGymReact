import React, { useState } from 'react';
import SessionContext from './SessionContext';
import { getUserToLogin } from '../../../firebase';

const SessionContextLogic = ({ children }) => {
    const [session, setSession] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        let loginCorrect = false;
        const userData = await getUserToLogin(email, password); 
        if (userData != null) {
            setUser(userData); 
            setSession(true);
            loginCorrect = true;
        } else {
            console.error("Credenciales incorrectas o usuario no encontrado.");
        }
        return loginCorrect;
    };
    
    

    const logout = () => {
        setSession(false);
    };

    return (
        <SessionContext.Provider value={{ session, login, logout, user }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionContextLogic;
