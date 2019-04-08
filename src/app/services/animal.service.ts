import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { AnimalModel } from '../models/animal.model';

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

  listAnimals() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.get(this.url + '/list-animals');
  }

  findAnimal(id, token) {
    console.log('id from service', id);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': token
    });
    return this._http.get(this.url + 'find-animal/' + id , {headers: headers});
  }

  getAnimalImage(token, id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': token
    });
    return this._http.get(this.url + 'get-image/' +  id + '.png', {headers: headers});

  }

  editAnimal(id, token, animal: AnimalModel) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': token
    });

    return this._http.put(this.url + 'update-animal/' + id, animal, {headers: headers});
  }

  deleteAnimal(token, id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': token
    });

    const options = {
      headers: headers
    };

    return this._http.delete(this.url + 'delete-animal/' + id, options);
  }
}
