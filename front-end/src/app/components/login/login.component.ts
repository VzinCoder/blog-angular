import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }


    const email = this.loginForm.controls.email.value || ''
    const password = this.loginForm.controls.password.value || ''


    this.authService.login(email, password).subscribe((response) => {
      localStorage.setItem('acess_token', JSON.stringify(response))
      this.router.navigateByUrl('/')
    })



  }

}
