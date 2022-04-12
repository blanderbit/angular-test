import { Resolve } from "@angular/router";
import { HttpAuthorizationProvider, FormFields } from "api-provider";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProfileDataResolver implements Resolve<FormFields[]> {
    constructor(
        private httpAuthorizationProvider: HttpAuthorizationProvider
    ) {}

    resolve(): Observable<FormFields[]> {
        return this.httpAuthorizationProvider.getUsers();
    }
}