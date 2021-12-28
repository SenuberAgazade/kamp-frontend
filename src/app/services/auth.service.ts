import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../modules/loginModel';
import { SingleResponseModel } from '../modules/singleResponseModel';
import { TokenModel } from '../modules/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='https://localhost:44339/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login", loginModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}
