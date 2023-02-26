import {lazy, Suspense} from "react";
import { Route, Routes } from 'react-router-dom';
import Path from "./path";
import LoadingPage from "../pages/loading-page/loading-page";

const Home = lazy(() => import('../pages/app/app'));
const Loading = lazy(() => import('../pages/loading-page/loading-page'))


export default function RoutePages(){
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path={Path.App} index element={<Home />} />
            </Routes>
        </Suspense>
    )
}
