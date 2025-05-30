import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {BookmarkerComponent} from "./components/bookmarker/bookmarker.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {RegistrationComponent} from "./components/user/registration/registration.component";
import {UserComponent} from "./components/user/user.component";

export const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full'},
  {path: 'presentation', component: PresentationComponent,},
  {path: 'contact', component: ContactComponent,},
  {path: 'bookmarker', component: BookmarkerComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'discover', component: DiscoverComponent,},
  {path:'registration', component: RegistrationComponent,},
  {path:'user', component: UserComponent,},
];
