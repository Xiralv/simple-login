import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      // Navigate to the dashboard or home page after login
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Form is invalid');
    }
  }
}
