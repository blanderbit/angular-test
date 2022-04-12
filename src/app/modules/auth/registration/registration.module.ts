import { NgModule } from "@angular/core";
import { ApiProviderModule } from "api-provider";
import {RouterModule, Routes} from "@angular/router";
import { RegistrationComponent } from './registration.component';
import {RegistrationDataResolver} from "./registration.data.resolver";
import {SharedModule} from "../../shared/shared.module";


const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent,
        resolve: {
            registrationData: 'RegistrationDataResolver'
        }
    },
];

@NgModule({
    imports: [
        ApiProviderModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        RegistrationComponent
    ],
    providers: [
        {
            provide: 'RegistrationDataResolver',
            useClass: RegistrationDataResolver
        }
    ]
})
export class RegistrationModule { }
