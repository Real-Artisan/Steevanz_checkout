import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiURL = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) { }
  getCountries():Observable<any> {
    return this.http.get <Response> (this.apiURL)
  }
}
