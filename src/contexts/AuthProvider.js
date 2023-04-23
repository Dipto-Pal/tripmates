import { createContext } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    //share all information
    const authInfo = {
        name: "Tripmates",
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;