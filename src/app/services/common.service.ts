import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url = enviroment.apiUrl;

  constructor(private http: HttpClient) { }



  getData() {
    return this.http.get(`${this.url}/campaign`)
  }

  deleteCampaign(id: string) {
    return this.http.delete(`${this.url}/campaign/${id}`);
  }
}
