import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
export interface RequestElement {
  position: number;
  contractType: string;
  serviceType:string;
  Subsidiary:string;
  requestedDate: Date;
  status: string;
}

const REQUEST_DATA: RequestElement[] = [
  { position: 1, contractType: 'NDA',serviceType:'Goods',Subsidiary:'Group', requestedDate: new Date('2023-01-15'), status: 'Pending' },
  { position: 2, contractType: 'SLA', serviceType:'NDA',Subsidiary:'Life',requestedDate: new Date('2023-02-10'), status: 'Approved' },
  // Add more request data as needed
];


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements AfterViewInit{
  displayedColumns: string[] = ['contractType', 'serviceType', 'Subsidiary','requestedDate', 'status'];
  dataSource = new MatTableDataSource<RequestElement>(REQUEST_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  clickedRows = new Set<RequestElement>();
  constructor(
    private router: Router,
    private _liveAnnouncer: LiveAnnouncer
  ) {}


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  onRowClick(row: RequestElement) {
    // Toggle the clicked row in the set
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }
  navigateToRequestForm() {
    // Navigate to the goods-and-services component
    this.router.navigate(['/goods-and-services']);
  }

}
