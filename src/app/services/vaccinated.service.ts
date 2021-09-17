import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class VaccinatedService {
    url=environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllVaccinated():Observable<any>{
    return this.http.get(`${this.url}/vaccinated.json`);
    
  }


  public postVaccinated(body: any):Observable<any> {
    return this.http.post(`${this.url}/vaccinated.json`, body);
  }


public patchVaccinated(id:string, body: any): Observable<any>{
  return this.http.patch(`${this.url}/vaccinated/${id}.json`, body);
}

public deleteVaccinated(id: string):Observable<any>{
  return this.http.delete(`${this.url}/vaccinated/${id}.json`);
}

}