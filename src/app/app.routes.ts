import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout';
import { Groups } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';
import { onlyPublicUserGuard } from './guards/only-public-users-guard2';
import { onlyLoggedUserGuard } from './guards/only-logged-users-guard';


export const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "register",
    component: RegisterPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "",
    component: LoggedLayout,
    canActivateChild: [onlyLoggedUserGuard],
    children: [
      {
        path: "",
        component: ContactPage
      },{
        path: "contacts/new",
        component: NewEditContact
      },
      {
        path: "contacts/:idContacto",
        component: ContactDetailsPage
      },
      {
        path: "contacts/:idContacto/edit",
        component: NewEditContact
      },
      {
        path: "groups",
        component: Groups
      },
    ]
  },

];