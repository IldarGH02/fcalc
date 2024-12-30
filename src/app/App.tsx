import { Suspense, useEffect } from "react";
import { RootRouting } from "../pages";

const tg = window.Telegram.WebApp;

const App = () => {
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
