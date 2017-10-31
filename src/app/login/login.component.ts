import { Component, OnInit } from '@angular/core';
import { User } from "../services/user";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
email : string;
password : string;

  constructor(private loginServ : LoginService) { }

  login(){
   const user = new User(this.email,this.password);
    console.log(this.email+' '+this.password);
    this.loginServ.login(user).subscribe();
  }

  loginNow() {
    const user = new User(this.email,this.password);    
    this
      .loginServ
      .login(user)
      .subscribe(next => {console.log(next)} // login succeed
      , error => {console.log("Bad credentials"); // or extract smth from <error> object
});
 }

  ngOnInit() {
  }

}
