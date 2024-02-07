import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { MainRoutes } from "./routes";

const App = () => {
    const { handleAuthenticateUser } = useAuth()
    
    handleAuthenticateUser()

    return (
        <div>
            <MainRoutes />
        </div>
    )
}

export default App;