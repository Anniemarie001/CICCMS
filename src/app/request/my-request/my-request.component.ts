import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RequestDataService } from '../../Services/request/request-data.service';
export interface RequestElement {
  position: number;
  contractType: string;
  serviceType:string;
  Subsidiary:string;
  requestedDate: Date;
  status: string;
}

const REQUEST_DATA: RequestElement[] = [
  { position: 1, contractType:'NDA', serviceType:'Goods',Subsidiary:'Group', requestedDate: new Date('2023-01-15'), status: 'Pending' },

];

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.scss']
})
export class MyRequestComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'position', 'contractType', 'serviceType', 'Subsidiary', 'requestedDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<RequestElement>(REQUEST_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  clickedRows = new Set<RequestElement>();
  selectedRows: RequestElement[]=[];
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder,
    private requestDataService: RequestDataService
  ) {
    this.searchForm = this.fb.group({
      search: [''],
      requestedDate: [null],
    });
  }

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

  applyFilter() {
    const filterValue = this.searchForm.value;
    const dateFilter = filterValue.requestedDate ? filterValue.requestedDate.toISOString().split('T')[0] : '';
    const searchString = filterValue.search.toLowerCase();

    this.dataSource.filter = JSON.stringify({
      contractType: searchString,
      requestedDate: dateFilter,
      status: searchString,
    });
  }

  onRowClick(row: RequestElement) {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }

  toggleSelectAll(event: any) {
    this.selectedRows = event.checked ? [...this.dataSource.data] : [];
  }

  toggleSelectRow(row: RequestElement) {
    if (this.isSelected(row)) {
      this.selectedRows = this.selectedRows.filter((selectedRow) => selectedRow !== row);
    } else {
      this.selectedRows.push(row);
    }
  }

  isSelected(row: RequestElement): boolean {
    return this.selectedRows.includes(row);
  }

  openSelectedItems() {
    if (this.selectedRows.length > 0) {
      // Implement logic to handle opening selected items
      this.router.navigate(['/view-request']);
      // For example, navigate to a new page with details of selected items
      console.log('Selected Rows:', this.selectedRows);
    }
  }
  viewRequestDetails(row: RequestElement) {
    console.log('Setting selected request:', row);
    this.requestDataService.setSelectedRequest(row);
    console.log('Selected Request (before navigation):', row);
    this.router.navigate(['/view-request']);


  }
  navigateToRequestForm() {
    this.router.navigate(['/goods-and-services']);
  }

  dateFilterChanged(event: MatDatepickerInputEvent<Date>) {
    this.searchForm.patchValue({ requestedDate: event.value });
  }

}
