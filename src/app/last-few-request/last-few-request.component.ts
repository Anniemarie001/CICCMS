import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-request',
  templateUrl: './last-few-request.component.html',
  styleUrls: ['./last-few-request.component.scss']
})
export class LastFewRequestComponent {
  request = [
    {
      id: 1,
      Type: "SLA",
      Title: "SLA BETWEEN VENDOR A AND CIC INSURANCE GROUP",
      RequestedBy: "Annah Mukethe",
      status: "Draft",
      
    },
    
    {
      id: 1,
      Type: "NDA",
      Title: "Data protection",
      RequestedBy: "Anna",
      status: "Review",
      
    },
    {
      id: 1,
      Type: "Good Purcahse",
      Title: "PURCAHSE OF NEW MONITORS FOR ICT TEAM",
      RequestedBy: "Denis Ogutu",
      status: "Signed",
      
    },
    {
      id: 1,
      Type: "Services",
      Title: "ACQUIRING OF CLOUD STORAGE FOR DOCUMENT STORAGE",
      RequestedBy: "Ann ",
      status: "Rejected",
      
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
