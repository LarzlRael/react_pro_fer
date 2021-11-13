import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { LazyPage3, LazyPage2, LazyPage1 } from '../pages';

export const Navigation = () => {
    /* const {pat } = useRouteMath; */

    return (
        <>
            <h2>LazyLayout Pages</h2>
            <ul>
                <li>
                    <Link to={`lazy1`}>
                        Lazy page 1</Link>
                </li>
                <li>
                    <Link to={`lazy2`}>
                        Lazy page 2</Link>
                </li>
                <li>
                    <Link to={`lazy3`}>
                        Lazy page 3</Link>
                </li>
            </ul>
            <Routes>
                <Route path="lazy1" element={<LazyPage1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<LazyPage3 />} />
                <Route path="*" element={<Navigate replace to={'lazy1'} />} />
            </Routes>
        </>
    )
}
