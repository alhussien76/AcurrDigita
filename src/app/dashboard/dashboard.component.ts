import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedGraph = ""
  togglePreview = true
  selectedImageIndex = 0
  graphs = [
    { path: 'assets/1.jpg' },
    { path: 'assets/2.jpg' },
    { path: 'assets/2.jpg' },
    { path: 'assets/2.jpg' },
    { path: 'assets/1.jpg' },
    { path: 'assets/2.jpg' },
    { path: 'assets/1.jpg' },
    { path: 'assets/2.jpg' },
    { path: 'assets/1.jpg' },
    { path: 'assets/1.jpg' },
  ]
  constructor() { }



}
