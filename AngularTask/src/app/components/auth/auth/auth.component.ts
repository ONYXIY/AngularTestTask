import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserService } from 'src/app/services/user.services';
import { AuthServiceService } from 'src/app/services/auth.service';
import { ILogin, IRegistration } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  public needRegister: boolean = false;
  public authForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthServiceService, private userService: UserService) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    if (this.authForm.valid) {
      if (this.needRegister) {
        this.register();
      } else {
        this.login();
      }
    }
  }

  login(): void {
    const user: ILogin = {
      userName: this.authForm.value.userName,
      password: this.authForm.value.password
    };
    alert('seccess')
    this.auth.login(user);
  }

  register(): void {
    const user: IRegistration = this.authForm.value;
    this.auth.register(user);
    alert('seccess')
  }

  toggleForm(): void {
    this.needRegister = !this.needRegister;
    this.authForm.reset();
  }

  isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }
}




  
//   private signupUsers: IUser[] = [];

//   signUpObj: IUser = {
//     userName: '',
//     email: '',
//     password: ''
//   }

//   loginObj: IUser ={
//     userName: '',
//     password: ''
//   };

// onSignUp(){
// this.signupUsers.push(this.signUpObj);
// localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
// this.signUpObj = {
//   userName: '',
//   email: '',
//   password: ''
// }
// }
// onLogin(){
// const isUserExist = this.signupUsers.find(m => m.userName === this.loginObj.userName && m.password === this.loginObj.password)
// if(isUserExist != undefined){
//   alert('user Login');
// }else {
//   alert('wrong data');
// }
// }