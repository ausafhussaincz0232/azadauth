import { Component, OnInit } from '@angular/core';
import { AzadService } from '../azad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private azureadservice: AzadService) {}

  ngOnInit(): void {
    this.azureadservice.isUserLoggedIn.subscribe((user) => {
      this.isUserLoggedIn = user;
    });
  }
}
