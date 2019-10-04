import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated = false;
  profile: any;

  constructor(public auth: AuthService) { }

/**
   * Handle component initialization
   */
  async ngOnInit() {

    this.auth.localAuthSetup();
  }
}
