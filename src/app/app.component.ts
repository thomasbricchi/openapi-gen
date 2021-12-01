import {Component} from '@angular/core';
import {PatientsService} from "./api/services/patients.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openapi-gen';

  constructor(private p: PatientsService) {
  }

  patients$ = this.p.getPatients();
}
