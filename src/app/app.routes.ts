import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Deskary } from './home/body/proyects/deskary/deskary';
import { Events } from './home/body/proyects/events/events';
import { SpringBoot } from './home/body/proyects/spring-boot/spring-boot';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
        children: [
            {
                path: 'deskary',
                component: Deskary
            },
            {
                path:'events',
                component: Events
            },
            {
                path:'spring',
                component: SpringBoot
            }
        ]

    },
    {
        path: "**",
        redirectTo: 'home'
    }
];
