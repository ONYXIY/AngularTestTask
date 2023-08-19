import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthServiceService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthServiceService,
    private router: Router
  ) {}

  public authForm!: FormGroup;
  public needRegister: boolean = false;

  ngOnInit(): void {
    this.authForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  public submitForm(): void {
    if (this.authForm.valid) {
      if (this.needRegister) {
        this.auth.registerUser(this.authForm.value);
      } else {
        if (this.auth.loginUser(this.authForm.value)) {
          this.router.navigate(['posts']);
        } else {
          alert('Wrong credentials');
        }
      }
    }
  }

  public toggleForm(): void {
    this.needRegister = !this.needRegister;
    this.authForm.reset();
  }

  public isUserLoggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }
}
