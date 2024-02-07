export const useAuth = () => {
    const getToken = () => localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY)

    return {
        getToken
    }
}