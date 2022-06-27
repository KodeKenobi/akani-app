import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../services/ionicauth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {
  userDetail: string;
  userName: string;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
        this.userName = response.displayName;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }
}
