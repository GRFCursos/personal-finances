import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/Auth/SignIn"
import { SignUp } from "../pages/Auth/SignUp"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"

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
                element={<SignIn />}
            />

            <Route
                path="/signup"
                element={<SignUp />}
            />
        </Routes>
    )
}