import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
   }

   makeFileRequest(url: string, params: Array<string>, files: Array<File>, token: string, name: string) {
     console.log('from makeFileRequest', files);
    return new Promise (function(resolve, reject) {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length ; i++) {
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.setRequestHeader('authorization', token);
      xhr.send(formData);
    });
   }
}
