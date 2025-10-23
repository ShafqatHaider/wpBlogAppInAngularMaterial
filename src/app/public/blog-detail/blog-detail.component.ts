import { Component, OnInit } from '@angular/core';
import { Blog } from '../../core/models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  blog?: Blog;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getById(id);
  }
}