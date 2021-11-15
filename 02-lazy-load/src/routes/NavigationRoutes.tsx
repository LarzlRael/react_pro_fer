import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";

import Logo from '../logo.svg';
import { routes } from './routes';
import LazyPage1 from '../02-components-patterns/pages/LazyPage1';


export const NavigationRoutes = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={Logo} alt="Reac logo" />
                        {routes.map(({ path, name }) => (
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'nav-active' : ''} to={path}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </nav>

                    <Routes>
                        {/* <Route path="/lazy1" element={<LazyPage1 />} /> */}

                        {routes.map(({ path, component: Component }, index) => (
                            <Route path={path}
                                element={<Component />}
                            />
                        ))}
                        {/* <Route path="/" element={<Navigate to={routes[0].path} />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}