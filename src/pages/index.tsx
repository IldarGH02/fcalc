import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { Layout } from './Layout/Layout';

export const RootRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='home' element={<HomePage/>}/>
            </Route>
        </Routes>   
    )
}