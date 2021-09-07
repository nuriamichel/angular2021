import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TransactionsService {
    url = environment.app.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get(
      `${this.url}/transactions.json`
    );
  }

  public createTransaction(body: any): Observable<any> {
    return this.http.post(
      `${this.url}/transactions.json`,
      body
    );
  }

  public updateTransaction(id: string, body: any): Observable<any> {
    return this.http.put(
      `${this.url}/transactions.json/${id}.json`,
      body
    );
  }

  public patchTransaction(id: string, body: any): Observable<any> {
    return this.http.patch(
      `${this.url}/transactions.json/${id}.json`,
      body
    );
  }

  public deleteTransaction(id: string): Observable<any> {
    return this.http.delete(
      `${this.url}/transactions.json/${id}.json`
    );
  }
}