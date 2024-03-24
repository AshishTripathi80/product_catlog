import { Component } from '@angular/core';
import {RouterLink, RouterOutlet,Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router) {}

  ngOnInit(): void{
    this.router.events.subscribe((value:any)=>{
    })
  }

}
