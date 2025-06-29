import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { AboutAngularComponent } from './pages/about-angular/about-angular.component';

export const routes: Routes = [
    { path: "home", component:HomeComponent },
    { path: "convert", component:ConvertComponent},
    { path: "about", component:AboutAngularComponent},
    { path: "", redirectTo: "home", pathMatch: "full"}
];


