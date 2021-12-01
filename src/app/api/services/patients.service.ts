/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PatientDto } from '../models/patient-dto';

@Injectable({
  providedIn: 'root',
})
export class PatientsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPatients
   */
  static readonly GetPatientsPath = '/patients';

  /**
   * Lists of patients.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPatients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPatients$Response(params?: {
  }): Observable<StrictHttpResponse<Array<PatientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PatientsService.GetPatientsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatientDto>>;
      })
    );
  }

  /**
   * Lists of patients.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPatients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPatients(params?: {
  }): Observable<Array<PatientDto>> {

    return this.getPatients$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PatientDto>>) => r.body as Array<PatientDto>)
    );
  }

  /**
   * Path part for operation postPatient
   */
  static readonly PostPatientPath = '/patients';

  /**
   * create patient.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postPatient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPatient$Response(params: {
    body: PatientDto
  }): Observable<StrictHttpResponse<PatientDto>> {

    const rb = new RequestBuilder(this.rootUrl, PatientsService.PostPatientPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PatientDto>;
      })
    );
  }

  /**
   * create patient.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postPatient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPatient(params: {
    body: PatientDto
  }): Observable<PatientDto> {

    return this.postPatient$Response(params).pipe(
      map((r: StrictHttpResponse<PatientDto>) => r.body as PatientDto)
    );
  }

}
