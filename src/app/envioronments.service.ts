import {Injectable} from '@angular/core';
import {config} from "../assets/config/config";

@Injectable({
  providedIn: 'root'
})
export class EnvioronmentsService {

  constructor() {
  }

  get url() {
    return config.rootUrl;
  }
}
