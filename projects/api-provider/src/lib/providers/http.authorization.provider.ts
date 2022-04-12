import { Injectable } from "@angular/core";
import { HttpProvider } from "./http.provider";
import { FaceDataEnum } from "./enums";
import { FormFields } from "api-provider";

@Injectable()
export class HttpAuthorizationProvider extends HttpProvider {
    public url: FaceDataEnum = FaceDataEnum.Authorization;

    getRegistrationFields() {
        return super.get<FormFields[]>('registrationFields')
    }

    getUsers() {
        return super.post<FormFields[]>('users')
    }

    getLoginFields() {
        return super.get<FormFields[]>('loginFields')
    }

    registration(data: any) { // TODO need to add type
        return super.post('register', data)
    }

    login(data: any) { // TODO need to add type
        return super.post('login', data)
    }
}