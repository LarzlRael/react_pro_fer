import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    useParams
} from "react-router-dom";

import Logo from '../logo.svg';

export const NavigationRoutes = () => {
    return (
        <BrowserRouter>
            <nav>
                <img src={Logo} alt="Reac logo" />
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/topics">Topics</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/about" element={<h1>About</h1>} />

                <Route path="/topics" element={<h1>Topics</h1>} />

                <Route path="/" element={<h1>index</h1>} />
            </Routes>
        </BrowserRouter >
    );
}