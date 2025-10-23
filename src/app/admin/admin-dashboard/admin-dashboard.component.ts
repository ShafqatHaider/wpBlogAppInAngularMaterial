import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG imports
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { Blog } from '../../core/models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    // InputTextareaModule,
    CheckboxModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit  {
 blogs: Blog[] = [];
  displayDialog = false;
  current: Blog = this.empty();
  editing = false;

  constructor(private blogService: BlogService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  empty(): Blog {
    return { id: 0, title: '', content: '', author: 'Admin', date: new Date().toISOString(), imageUrl: '', tags: [], published: false };
  }

  load() {
    this.blogs = this.blogService.getAll().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  openNew() {
    this.current = this.empty();
    this.editing = false;
    this.displayDialog = true;
  }

  edit(blog: Blog) {
    this.current = { ...blog };
    this.editing = true;
    this.displayDialog = true;
  }

  save() {
    if (!this.current.title.trim()) return;
    this.current.date = new Date().toISOString();
    this.blogService.save(this.current);
    this.displayDialog = false;
    this.load();
  }

  confirmDelete(blog: Blog) {
    if (confirm('Delete this post?')) {
      this.blogService.delete(blog.id);
      this.load();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
