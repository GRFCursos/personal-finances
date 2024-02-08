import { Outlet } from "react-router-dom"
import { AuthMiddleware } from "../../middlewares/AuthMiddleware"
import { Container } from "./styles"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
    return (
        <AuthMiddleware>
            <Container>
                <Sidebar />

                

                <Outlet />
            </Container>
        </AuthMiddleware>
    )
}