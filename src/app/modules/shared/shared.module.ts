import {NgModule} from '@angular/core';
import {MaterialModule} from "./modules/material.module";
import {DinamicFormComponent} from './components/dinamic-form/dinamic-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        DinamicFormComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        MaterialModule,
        DinamicFormComponent
    ]
})
export class SharedModule {
}
