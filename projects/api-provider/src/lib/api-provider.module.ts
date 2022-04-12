import { NgModule } from "@angular/core";
import { HttpAuthorizationProvider } from "api-provider";


@NgModule({
  providers: [
      HttpAuthorizationProvider
  ]
})
export class ApiProviderModule { }
