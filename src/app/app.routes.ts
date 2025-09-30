import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { LoggedLayout } from './layouts/logged-layout';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';

export const routes: Routes = [
    {
        //Cuando la ruta diga "login" que me lleve a esta pagina
        path:"login",
        component: LoginPage
    },
    {
        path:"register",
        component: ContactPage
    },
    {
        path: "contacts/:id", 
        component: ContactPage
    },
    {
        path: "",
        component: LoggedLayout,
        children: [
            {
                path: "contacts/:id",
                component: ContactDetailsPage
            }
        ]
    }
    
];