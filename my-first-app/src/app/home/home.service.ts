import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data} from "./home.model";
import { AuthService } from '../auth/auth.service';


@Injectable({ providedIn: 'root' })
export class HomeService {
   constructor(private http: HttpClient, private authService:AuthService) {}

  createAndStorePost( studentName: string, bookList: string, author: string, qty: string) {
    const postData: Data = {studentName:studentName, bookList:bookList , author:author, qty:qty };
    this.http
      .post('https://ng-complete-guide-ae91e-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Data }>(
        'https://ng-complete-guide-ae91e-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Data[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-ae91e-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
