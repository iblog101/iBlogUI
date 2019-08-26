import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Blog} from '../app/Entities/blog';
import { Observable } from 'rxjs';
import { User } from './Entities/user';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private userUrl : string = "https://localhost:44371/api/Users";
  private blogUrl : string = "https://localhost:44371/api/Blogs";
  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get(this.userUrl);
  }

  getLoggedInUser(username:string, password:string){
    return this.http.get(this.userUrl + "/" + username + "," + password);
  }

  postBlog(blog: Blog): Observable<Blog>{
    return this.http.post<Blog>(this.blogUrl, blog);
  }

  register(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl, user);
  }
}
