import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Data } from "./home.model";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postArray : Data[] = [];
  isFetching = false;
  check: any = "";
  constructor(private http:HttpClient, private homeService:HomeService){ }

  ngOnInit() {
    this.isFetching = true;
    this.homeService.fetchPosts().subscribe(posts =>{
      this.isFetching=false;
      this.postArray=posts;
    });
  }
  onCreatePost(postData: Data) {
    // Send Http request
    this.homeService.createAndStorePost( postData.studentName, postData.bookList, postData.author , postData.qty);
    this.check = alert("The data is added")
  }
  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.homeService.fetchPosts().subscribe(posts =>{
      this.isFetching=false;
      this.postArray=posts;
      this.check = alert("The data is fetched")
    });
  }
  onClearPosts() {
    // Send Http request
    this.homeService.deletePosts().subscribe(()=> {
      this.postArray = [];
      this.check = alert("The data is removed")
    });
  }
}
