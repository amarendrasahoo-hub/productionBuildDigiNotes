import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsbRequest } from '../model/usb-request';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class UsbaccessService {
  private url = 'http://nodefilemanagement-env.eba-md56muk4.ap-south-1.elasticbeanstalk.com/assets/usb/create';

  constructor(private http: HttpClient) { }

  postUsbAccessReq(usbreqobj: UsbRequest): Observable<PostResponse>  {
    console.log("inside service : ", usbreqobj)
    return this.http.post<PostResponse>(this.url, usbreqobj);
  } }
