import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environment/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url = enviroment.apiUrl;

  constructor(private http: HttpClient) { }

  showList: BehaviorSubject<boolean> = new BehaviorSubject(true);
//get all api
  getData() {
    return this.http.get(`${this.url}/campaign`)
  }
// get api by id
  getDataById(id: string) {
    return this.http.get(`${this.url}/campaign/${id}`);
  }
//delete api
  deleteCampaign(id: string) {
    return this.http.delete(`${this.url}/campaign/${id}`);
  }
//post api
  postData(body: any){
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(`${this.url}/campaign`, body, {'headers':headers});
  }
}
