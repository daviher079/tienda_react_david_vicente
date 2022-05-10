import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom'

export const authContext = createContext();
export const useAuth = () =>
{
    const context = useContext(authContext);
    return context;
}

export function AuthProvider({children})
{
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    /*const signup = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
       .then(
           ()=>{
            navigate("/");
           }
       )
       .catch(
           (err)=>{
                
                if(err.code === 'auth/invalid-email')
                {
                    setError('No se ha introducido un correo electronico válido')
                }
                if(err.code === 'auth/weak-password')
                {
                    setError('La contraseña debe tener al menos 6 caracteres');
                }
                if(err.code === 'auth/email-already-in-use')
                {
                    setError('Error. este mail ya está registrado');
                }
                   
            }
        );
    }
    
    const login = async (email, password ) =>{
        await signInWithEmailAndPassword(auth, email, password).then(
            (userCredentials)=>{
                console.log(userCredentials)
                navigate("./HomePage");
            }
        )
        .catch(
            (err)=>{
                if(err.code === 'auth/user-not-found')
                {
                    setError('No se ha introducido un correo electronico válido')
                }
                if(err.code === 'auth/wrong-password')
                {
                    setError('La contraseña debe tener al menos 6 caracteres');
                }
                   
            }
        ); 
    } 

    const logout = ()=>
    {
        signOut(auth);
    }
    
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
          setLoading(false)
      });
    }, [])
    

    if(error!=='')
    {
        alert(error) 
        setError('')
    }

    return <authContext.Provider value={{ signup, login, user, logout, loading }}>{children}</authContext.Provider>*/
}