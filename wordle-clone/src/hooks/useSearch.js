import { useState } from "react";
const rootUrl = process.env.NODE_ENV === "production" ? "https://cs35l-group26.onrender.com/api" : "api"

export const useSearch = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const search = async (searching) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`${rootUrl}/user/` + searching, {
            method: 'GET'
        }) 

        const json = await response.json()
        
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setIsLoading(false)
            //console.log(json)
            return json
        }
    }

    return {search, isLoading, error}
}