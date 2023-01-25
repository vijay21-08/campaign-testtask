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

  getData() {
    return this.http.get(`${this.url}/campaign`)
  }

  deleteCampaign(id: string) {
    return this.http.delete(`${this.url}/campaign/${id}`);
  }
  postData(person: any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post('https://63d113d43f08e4a8ff8fee16.mockapi.io/api/v1/campaign', body,{'headers':headers})
  }
}
