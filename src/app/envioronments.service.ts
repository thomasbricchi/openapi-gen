import {Injectable} from '@angular/core';
import {config} from "../assets/config/config";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvioronmentsService {

  constructor() {
  }

  get url() {
    return config.rootUrl;
  }

  get production(){
    return environment.production;
  }
}
