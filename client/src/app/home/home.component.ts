import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  homepage = './assests/homepage.jpg';
  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.setItem('status', 'home');
  }

}
