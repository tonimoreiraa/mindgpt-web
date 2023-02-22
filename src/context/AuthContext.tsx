import { createContext, useContext } from "react";
import {useLocalStorage} from 'react-use'

type AuthContextType = {
     authenticated: boolean,
     userData?: any,
     token?: string,
     signIn: (userData: object, token: string) => void,
     signOut: () => void,
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider(props: any) {

    const [token, setToken] = useLocalStorage<string|undefined>('@auth-token', undefined)
    const [userData, setUserData] = useLocalStorage<any|undefined>('@auth-user-data', undefined)

    function signIn(user: any|any, t: string) {
        setToken(t)
        setUserData(user)
        window.location.href = '/'
    }

    function signOut() {
        window.location.href = '/'
    }

    const authenticated = Boolean(token)

    return <AuthContext.Provider value={{token, userData, authenticated, signIn, signOut}}>
        {props.children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)