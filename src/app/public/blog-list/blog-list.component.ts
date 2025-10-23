import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';
import { Blog } from '../../core/models/blog.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit{
 blogs: Blog[] = [];
  constructor(private blogService: BlogService) {}
  ngOnInit() {
    // this.blogService.seedSample();
    // this.blogs = this.blogService.getPublished();
  }
}
