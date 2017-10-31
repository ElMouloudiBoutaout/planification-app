import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/throw';
import { User } from "./user";

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor( @Inject('homeUrl') private url, private http: Http) { }

  private  _ErrorHandler(error : Response) : any{
    console.log("error" +error);
    return Observable.throw(error || "Server Error");
  }

  login(user : User)  {
    return this.http.post(this.url+"/index",JSON.stringify({email: user.email, password: user.password}),{ headers: this.headers })
      .map((response: Response) =>{ response = response.json();
      console.log(response)})
      .catch(this._ErrorHandler);
  }


  logout(user : User) {
    return this.http.post(this.url+"/logout",null,null)
      .map((response: Response) => response = response.json())
      .catch(this._ErrorHandler);
  }

  login2 (loginDetails: User): Observable<any> { // custom class, may be empty now
    
        let headers = new Headers({ 
              'Authorization': 'Basic ' + btoa(loginDetails.email + ':' + loginDetails.password),
              'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
        });
    
        let options = new RequestOptions({ 
               headers: headers 
        });
    
        return this
                  .http
                  .post(this.url+"/index", {}, options);
                   // handle 401 error - bad credentials
    }

}
