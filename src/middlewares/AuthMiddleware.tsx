import { ReactElement } from "react"
import { useAuth } from "../hooks/auth"
import { Navigate } from "react-router-dom"
import { Loading } from "../components/Loading"

type Props = {
    children: ReactElement
}

export const AuthMiddleware = ({ children }: Props) => {
    const { authStatus } = useAuth()

    if (authStatus == 'authenticated') {
        return children
    }

    if (authStatus == 'not_verified') {
        return <Loading />
    }

    return <Navigate to='/signin' />
}