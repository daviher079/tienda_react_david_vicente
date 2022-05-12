import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [mail, setMail] = useState();
    
    return(
        <UserContext.Provider value={{mail, setMail}}>{children}</UserContext.Provider>
    );
}

export default UserContext;