import {Injectable} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {FieldValidation, HttpAuthorizationProvider, FormFields} from "api-provider";

const validators: any = Validators

@Injectable()
export abstract class FormComponent {
    public abstract form: FormGroup;
    public abstract formData: FormFields[];
    public abstract route: ActivatedRoute;
    public abstract fb: FormBuilder;

    public _initForm() {
        const group: any = {};

        this.formData.forEach((option: FormFields) => {
            const validations: Array<ValidatorFn> = option?.validations?.map(
                (validation: FieldValidation) => this.getExistValidator(
                    validation.name,
                    validation.value
                )).filter(i => !!i) || [];

            if(option.required) {
                validations.unshift(Validators.required)
            }
            group[option.name] = new FormControl(
                '',
                validations
            )
        });

        this.form = this.fb.group(group)
    }

    public getExistValidator(name: any, value: any): ValidatorFn {
        return validators[name] && validators[name](value)
    }

    public abstract submit(): void;

}
