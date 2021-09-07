import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class WalletsService {
    url = environment.app.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getWallets(): Observable<any> {
    return this.http.get(
      `${this.url}/wallets.json`
    );
  }

  public createWallets(body: any): Observable<any> {
    return this.http.post(
      `${this.url}/wallets.json`,
      body
    );
  }

  public updateWallets(id: string, body: any): Observable<any> {
    return this.http.put(
      `${this.url}/wallets/${id}.json`,
      body
    );
  }

  public patchWallets(id: string, body: any): Observable<any> {
    return this.http.patch(
      `${this.url}/wallets/${id}.json`,
      body
    );
  }

  public deleteWallets(id: string): Observable<any> {
    return this.http.delete(
      `${this.url}/wallets/${id}.json`
    );
  }
}