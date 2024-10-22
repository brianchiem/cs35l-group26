import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {toast} from 'react-toastify';

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password, username) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch('/https://cs35l-group26.onrender.com/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, username})
        }) 

        const json = await response.json()
        
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            toast.success("User created succesfully")

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}