import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class PublicationService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.url}/publications.json`)
  }

}