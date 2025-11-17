import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Main } from './main/main';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'main',component:Main}

];
