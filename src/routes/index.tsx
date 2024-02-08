import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"
import { Auth } from "../pages/Auth"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <AuthMiddleware>
                        <Home />
                    </AuthMiddleware>
                }
            />

            <Route
                path="/signin"
                element={<Auth type="signin" />}
            />

            <Route
                path="/signup"
                element={<Auth type="signup" />}
            />
        </Routes>
    )
}