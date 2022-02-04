import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
   isLogInMode = true;
   isLoading = false;

   constructor(private users: UsersService) { }

  switchMode(){
    this.isLogInMode = !this.isLogInMode
  }
  onSubmit(data:NgForm){
    if (!data.valid){
      return;
    }
    const email = data.value.email;
    const password = data.value.password;

    this.isLoading = true
    if (this.isLogInMode){
       //.....
    }else {
      this.users.signup(email, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        }
      );
    }

      data.reset();
    }
  }
