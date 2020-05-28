import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CreateCr } from '../model/create-cr';
import { PostResponse } from '../model/post-response';


@Injectable({
  providedIn: 'root'
})
export class CreatecrService {
  //private url = 'http://localhost:3000/assets/cr/create';
  private url = 'http://nodefilemanagement-env.eba-md56muk4.ap-south-1.elasticbeanstalk.com/assets/cr/create';
  constructor(private http: HttpClient) { }

  postCreateCR(createcrobj: CreateCr):  Observable<PostResponse>  {
    //console.log(asset)
    return this.http.post<PostResponse>(this.url, createcrobj);
  }
}
