import { NgModule } from "@angular/core";
import { ApiProviderModule } from "api-provider";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProfileComponent} from "./profile.component";
import {ProfileDataResolver} from "./profile.data.resolver";
import {CommonModule} from "@angular/common";


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        resolve: {
            profileData: 'ProfileDataResolver'
        }
    },
];

@NgModule({
    imports: [
        ApiProviderModule,
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        {
            provide: 'ProfileDataResolver',
            useClass: ProfileDataResolver
        }
    ]
})
export class ProfileModule { }
