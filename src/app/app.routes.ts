import { Routes } from '@angular/router';
import { CardComponent } from './component/dashboard/card/card.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', component: DashboardComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'card/:id', component: CardComponent},
];
