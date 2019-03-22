import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this._http.post(this.url + 'save-animal', animal, {headers: headers});
  }
}
