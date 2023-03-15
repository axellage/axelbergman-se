import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import {TopBar} from "./TopBar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./Home/Home";
import {Footer} from "./Footer/Footer";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}><TopBar/><div style={{flex: 1, paddingBottom:"100px"}}><Outlet/></div><Footer/></div>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects/:projectId" element={<div>Project</div>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
