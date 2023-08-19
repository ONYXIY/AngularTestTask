import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interface/Post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.api);
  }

  getPostById(id: number): Observable<IPost> {
    const url = `${this.api}/${id}`;
    return this.http.get<IPost>(url);
  }
}
