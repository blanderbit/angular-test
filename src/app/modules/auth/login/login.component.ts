import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormFields, HttpAuthorizationProvider} from "api-provider";
import {ActivatedRoute, Router} from "@angular/router";
import {FormComponent} from "../../shared/abstract/form.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent {
    public form: FormGroup;
    public formData: FormFields[] = this.route.snapshot.data["loginData"];

    constructor(
        public route: ActivatedRoute,
        public fb: FormBuilder,
        public router: Router,
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
            .login(this.form.getRawValue())
            .subscribe(() => this.router.navigateByUrl('/profile'))
    }

}
