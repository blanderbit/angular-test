import {Directive} from '@angular/core';
import {ErrorSnackComponent} from '../../../shared/error-snack/error-snack.component';
import {SuccessSnackComponent} from '../../../shared/success-snack/success-snack.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ComponentType} from '@angular/cdk/portal';

@Directive()
export abstract class ToastMessageDirective {
    public abstract snackBar: MatSnackBar;

    private snackComponent(
        obj: object,
        component: ComponentType<unknown>,
        classes: string[]
    ): void{
        this.snackBar.openFromComponent(component, {
            data: {
                ...obj,
                action: 'close'
            },
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: classes
        });
    }

    public showErrorMessage(error: string, options?: object): void {
        this.snackComponent({
            error,
            ...options
        }, ErrorSnackComponent, ['snack-error']);
    }

    public showSuccessMessage(success: string, options?: object): void {
        this.snackComponent({
            success,
            ...options
        }, SuccessSnackComponent, ['snack-success']);
    }
}
