import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface Response {
  idToken: string;
  email:	string;
  refreshToken: string;
  expiresoIn:	string;
  localId: string;
}

@Injectable({providedIn : "root"})

export class UsersService{
     constructor(private http: HttpClient) {}

  signup(email: string, password: string){
     return this.http.post<Response>(
       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMe93vaEta-wMkqB1Mri9O_mNXCb2cB74',
       {
         email: email,
         password: password,
         returnSecureToken: true
    }
   );
  }
}
