import {
    createContext,
    useState,
    useEffect
} from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUSer: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUSer] = useState(null);
    const value = { currentUser, setCurrentUSer }

    useEffect(() =>
        onAuthStateChangedListener((user) => {
            if (user) createUserDocumentFromAuth(user);
            setCurrentUSer(user)
        })
        , []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
