import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { Post } from "./post.model"
import {map} from "rxjs/operators";
import {PostServices} from "./posts.service";
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

   private userSub: Subscription;
   loadedPosts = [];
   isAuthenticated = false;

  constructor(private http: HttpClient, private postService: PostServices, private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
     this.isAuthenticated = !!user;
     console.log(!user);
     console.log(!!user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();  
  }

}
