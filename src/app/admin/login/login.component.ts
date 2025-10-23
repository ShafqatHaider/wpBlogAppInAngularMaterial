import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 username = '';
  password = '';
  err = '';
  constructor(private authService: AuthService,
     private router: Router) {}

  login(e: Event) {
    e.preventDefault();
    const ok = this.authService.login(this.username, this.password);
    if (ok) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.err = 'Invalid credentials. Try admin / 1234';
    }
  }
}
