import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyloadx/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        component: lazy(() => import(/* webpackChunkName :"Lazylayot" */'../01-lazyloadx/pages/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy Loading'
    },

];