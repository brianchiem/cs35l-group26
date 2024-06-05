import { useAuthContext } from "./useAuthContext"
import {toast} from 'react-toastify';
// import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    // const {dispatch: workoutsDispatch} = useWorkoutsContext()
    
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')
        localStorage.removeItem('win')

        // dispatch logout
        dispatch({type: 'LOGOUT'})
        toast.success("Succesfully logged out")
        // workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return {logout}
}