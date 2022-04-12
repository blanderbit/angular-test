import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
    ],
    exports: [
        MatSnackBarModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
    ],

})
export class MaterialModule {
}
