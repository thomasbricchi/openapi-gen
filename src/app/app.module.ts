import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {EnvioronmentsService} from "./envioronments.service";
import {CoreModule} from "./core/core.module";
import {ApiModule} from "./api/api.module";
import {ApiConfiguration, ApiConfigurationParams} from "./api/api-configuration";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    CoreModule
  ],
  providers: [{
    provide: ApiConfiguration,
    useFactory: authConfiguration,
    deps: [EnvioronmentsService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function authConfiguration(envioronmentsService: EnvioronmentsService): ApiConfigurationParams {
  return {rootUrl: envioronmentsService.url};
}
