import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
    {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '**',
        redirectTo: 'registration'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class AuthModule { }
