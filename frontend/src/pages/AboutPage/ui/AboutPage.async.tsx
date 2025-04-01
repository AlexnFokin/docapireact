import { lazy } from 'react';

export const AboutPageAsync =  lazy(() => new Promise((resolve) => {
    // @ts-expect-error temporary 

    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));