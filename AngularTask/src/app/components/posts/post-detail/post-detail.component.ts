import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from 'src/app/interface/Post.interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  @Input() post!: IPost;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const postId = Number(params.get('id'));
      this.postService.getPostById(postId).subscribe((data) => {
        this.post = data;
      });
    });
  }
}
