import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import LazyPage1 from "../01-lazyload/pages/LazyPage1";
// import LazyPage2 from "../01-lazyload/pages/LazyPage2";
// import LazyPage3 from "../01-lazyload/pages/LazyPage3";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = ()=> JSX.Element;
interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout= lazy(() => import(/*webpackChunkName:"lazyPage1" */ '../01-lazyload/layout/LazyLayout'))

export const routes:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    },
   
]