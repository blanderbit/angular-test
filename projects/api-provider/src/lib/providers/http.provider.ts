import { FakeData } from "../fake-data";
import { Observable, of } from "rxjs";

import { Injectable } from "@angular/core";
import { FaceDataEnum, RequestParamsEnum } from "./enums";

const fakeData: any = FakeData; // TODO should be have type

@Injectable()
export abstract class HttpProvider {
    public abstract url: FaceDataEnum;

    public fakeCall<T>(method: RequestParamsEnum, prefix: string, requestData?: any) { // TODO need to add type
        const data: any = fakeData[this.url][method][prefix];

        return of(method === RequestParamsEnum.Get ? data : data(requestData))
    }

    public get<T>(prefix: string): Observable<T> {
        return this.fakeCall<T>(RequestParamsEnum.Get, prefix)
    }

    public post<T>(prefix: string, requestData?: any): Observable<T> { // TODO need to add type
        return this.fakeCall<T>(RequestParamsEnum.Post, prefix, requestData)
    }
}