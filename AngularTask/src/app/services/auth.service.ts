import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.services';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      this.userService.registerUser(user);
    }
  }
}
