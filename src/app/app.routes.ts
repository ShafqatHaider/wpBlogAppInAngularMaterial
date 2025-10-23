import { Routes } from '@angular/router';
import { BlogListComponent } from './public/blog-list/blog-list.component';
import { BlogDetailsComponent } from './public/blog-details/blog-details.component';
import { authGaurd } from './core/guards/auth.guard';
import { LoginComponent } from './admin/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [

  { path: '', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [authGaurd] },
  { path: '**', redirectTo: '' },  
];
