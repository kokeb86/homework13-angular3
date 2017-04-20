import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { studentComponent } from "./student.component";
import { studentDetail } from "./studentdetail.component";
import {ProfileGuard} from "./profile.guard";
import {Error404Component} from "./error404.component";

const MY_ROUTES: Routes = [
    { path : 'error/404', component : Error404Component },
     { path: '', component: HomeComponent },
     { path: 'students', component: studentComponent },
     { path: 'students/profile/:id', component : studentDetail, canActivate : [ProfileGuard] },
     { path: 'students/profile', redirectTo: 'error/404' },
      { path: '**', redirectTo:  'error/404' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
