import { Suspense, useEffect } from "react";
import { RootRouting } from "../pages";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const tg = window.Telegram.WebApp;

const App = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(location.pathname.includes('/')) {
            navigate('/home')
        }
    })

    useEffect(() => {
        console.log(tg.initDataUnsafe.user)
    }, [])

    return (
        <Suspense fallback={'Loading...'}>
            <RootRouting/>
        </Suspense>
    );
}

export default App
