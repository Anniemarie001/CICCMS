import { Component } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.scss']
})
export class AllContractsComponent {
  folders: Section[] = [
    {
      name: 'Pending Contracts',
      updated: new Date('11/1/23'),
    },
    {
      name: 'Under Review Contracts',
      updated: new Date('11/17/23'),
    },
    {
      name: 'Signed Contracts',
      updated: new Date('1/28/23'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Expring',
      updated: new Date('1/01/24'),
    },
    {
      name: 'Terminated',
      updated: new Date('1/01/23'),
    },
  ];
 // Add this trackByFn method
 trackByFn(index: number, item: Section) {
  return item.name; // Assuming 'name' is a unique identifier for each item
}
}
