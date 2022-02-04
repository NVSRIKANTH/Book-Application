import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})

  export class PostServices {
    constructor(private http: HttpClient) {
    }

    createAndPost(Title: string, content: string){
      const postData:Post = {Title: Title, content:content};
      this.http.post('https://ng-complete-guide-ae91e-default-rtdb.firebaseio.com/posts.json',
        postData).subscribe(responseData =>{
          console.log(responseData);
      })
    }
  }
