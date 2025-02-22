import React, { useState } from 'react';
import SessionContext from './SessionContext';
import { getUserToLogin } from '../../../firebase';

const SessionContextLogic = ({ children }) => {
    const [session, setSession] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        let loginCorrect = false;
        setUser(await getUserToLogin(email, password)); // Espera a que la promesa se resuelva
        if (user != null) {
            setSession(true);
            loginCorrect = true;
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
