import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { IPost } from 'src/app/interface/Post.interface';



@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  private readonly http = inject(HttpClient)
  private readonly api = 'https://jsonplaceholder.typicode.com/posts'
  public posts$!: Observable<IPost[]>; 
  


constructor(){
}

ngOnInit(): void {
  this.posts$ = this.http.get<IPost[]>(this.api)
  console.log(this.posts$)
}
}
