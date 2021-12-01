import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from "./app.config";

@Injectable({
  providedIn: 'root'
})
export class EnvioronmentsService {

  constructor(@Inject(APP_CONFIG) private environment: AppConfig) {
  }

  get url() {
    return this.environment.rootUrl;
  }
}
