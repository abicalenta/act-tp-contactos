
import { LoginPage } from './pages/login-page/login-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { LoggedLayout } from './layouts/logged-layout';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { Routes } from '../../node_modules/@angular/router/index';

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