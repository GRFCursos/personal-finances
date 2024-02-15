import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Auth } from "../pages/Auth"
import { Layout } from "../components/Layout"
import { NewTransaction } from "../pages/Transaction/New"
import { NotFound } from "../pages/NotFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/signin"
                element={<Auth type="signin" />}
            />
            <Route
                path="/signup"
                element={<Auth type="signup" />}
            />

            <Route element={<Layout />}>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="nova-transacao"
                    element={<NewTransaction />}
                />
            </Route>

            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    )
}