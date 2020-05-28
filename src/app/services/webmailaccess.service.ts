import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebmailRequest } from '../model/webmail-request';
import { HttpClient } from '@angular/common/http';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class WebmailaccessService {

  private url = 'http://nodefilemanagement-env.eba-md56muk4.ap-south-1.elasticbeanstalk.com/assets/webmail/create';

  constructor(private http: HttpClient) { }

  postWebmailReq(webmailreqobj: WebmailRequest): Observable<PostResponse>  {
    console.log("in service",webmailreqobj);
    return this.http.post<PostResponse>(this.url, webmailreqobj);
  } 
}
