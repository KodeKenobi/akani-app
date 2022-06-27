import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }
  ngOnInit() {
  }

}

