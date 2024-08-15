import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:'',
        title:'Home',
        component:HomeComponent
    },
    {
        path:'login',
        title:'Login',
        component:LoginComponent
    }
];
