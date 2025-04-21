import { Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from "./components/login/login.component";
import {BookmarkerComponent} from "./components/bookmarker/bookmarker.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PresentationComponent} from "./components/presentation/presentation.component";

export const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full'},
  //{path: 'header', component: HeaderComponent,},
  //{path: 'footer', component: FooterComponent,},
  {path: 'presentation', component: PresentationComponent,},
  {path: 'contact', component: ContactComponent,},
  {path: 'bookmarker', component: BookmarkerComponent,},
  {path: 'login', component: LoginComponent,}
];
