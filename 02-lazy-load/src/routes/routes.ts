import { lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}
const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../02-components-patterns/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../02-components-patterns/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../02-components-patterns/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/',
        component: ShoppingPage,
        name: 'ShoppingPage'
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