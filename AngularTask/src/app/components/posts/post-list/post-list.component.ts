import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { IPost } from 'src/app/interface/Post.interface';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts$!: Observable<IPost[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}