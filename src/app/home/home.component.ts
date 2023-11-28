import { Component, OnInit } from '@angular/core';
import { BackendService } from '../Services/backend/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backendData: any;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getData().subscribe((data) => {
      this.backendData = data;
    });
  }
}
