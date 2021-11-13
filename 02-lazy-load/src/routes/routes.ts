import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}
const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyloadx/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyloadx/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyloadx/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/laz3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },


];