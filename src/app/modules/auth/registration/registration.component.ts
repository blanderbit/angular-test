import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { HttpAuthorizationProvider, FormFields} from "api-provider";
import {FormComponent} from "../../shared/abstract/form.component";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends FormComponent {
    public form: FormGroup;
    public formData: FormFields[] = this.route.snapshot.data["registrationData"];

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public fb: FormBuilder,
        public httpAuthorizationProvider: HttpAuthorizationProvider
    ) {
        super()
        this._initForm()
    }

    submit() {
        if(this.form.invalid) {
            return
        }

        this.httpAuthorizationProvider
            .registration(this.form.getRawValue())
            .subscribe(() => this.router.navigateByUrl('/auth/login'))
    }

}
