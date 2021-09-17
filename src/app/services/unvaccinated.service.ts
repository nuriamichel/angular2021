import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UnvaccinatedService {
    url=environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllUnvaccinated():Observable<any>{
    return this.http.get(`${this.url}/unvaccinated.json`);
    
  }


  public postUnvaccinated(body: any):Observable<any> {
    return this.http.post(`${this.url}/unvaccinated.json`, body);
  }


public patchUnvaccinated(id:string, body: any): Observable<any>{
  return this.http.patch(`${this.url}/unvaccinated/${id}.json`, body);
}

public deleteUnvaccinated(id: string):Observable<any>{
  return this.http.delete(`${this.url}/unvaccinated/${id}.json`);
}

}