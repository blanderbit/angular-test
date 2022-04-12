import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {LoginDataResolver} from "./login.data.resolver";
import {SharedModule} from "../../shared/shared.module";
import {ApiProviderModule} from "api-provider";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        resolve: {
            loginData: 'LoginDataResolver'
        }
    },
];


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ApiProviderModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        {
            provide: 'LoginDataResolver',
            useClass: LoginDataResolver
        }
    ]
})
export class LoginModule {
}
