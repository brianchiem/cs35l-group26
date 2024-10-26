import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {toast} from 'react-toastify';

const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26-1.onrender.com" : "api"

export const useLogin = () => {
    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (identifier, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${rootUrl}/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({identifier, password})
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

            toast.success("Succesfully logged in")
            setIsLoading(false)
        }
    }
    return {login, isLoading, error}
}