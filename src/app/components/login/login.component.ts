import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) {  }

  auth = {
    email:"",
    password:""
  }

  ngOnInit(): void {
  }

  Login(){
    this.authService.login(this.auth.email,this.auth.password).subscribe((resp:any)=>{
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    });
  }

}
