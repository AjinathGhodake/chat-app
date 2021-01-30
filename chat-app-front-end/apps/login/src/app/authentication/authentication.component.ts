import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookiesService } from '../service/cookies.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'login-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthenticationComponent  {

  loginForm = new FormGroup({
    username: new FormControl('ajinath ghodake'),
    password: new FormControl('password')
  });
  constructor(
    private httpService: HttpClientService,
    private router: Router,
    private cookieService: CookiesService
  ) {}

   getAuthenticationToken() {
    this.httpService
      .post(this.loginForm.value, 'authenticate')
      .subscribe(res => {
        this.cookieService.setCookie(res);
        this.router.navigate(['/chat']);
      });
  }

}
