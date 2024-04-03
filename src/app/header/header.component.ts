import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.loggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn; // Update isLoggedIn status when logged in
    });
  }

  logout(): void {
    this.authService.userLogout();
    this.isLoggedIn = false;
  }

}
