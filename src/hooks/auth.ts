import { useAppSelector } from "../redux/hooks"

export const useAuth = () => {
    const auth = useAppSelector(state => state.auth)

    const getToken = () => localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY)

    const authStatus = auth.authStatus

    return {
        getToken,
        authStatus
    }
}