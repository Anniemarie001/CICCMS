import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../Services/request/request-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent implements OnInit {
  viewRequestForm: FormGroup;
  router: any;
  usersList: any[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private requestDataService: RequestDataService
  ) {
    this.viewRequestForm = this.fb.group({
      contractType: [''],
      serviceType: [''],
      Subsidiary: [''],
      requestedDate: [''],
      status: [''],
   // Add assignee field to the form
      comment: [''],
      assignees: [[]],
      documents: [[]],
    });

    // Initialize or retrieve your list of users
    this.usersList = [
      { id: 1, name: 'Annah' },
      { id: 2, name: 'Denis' },
      // Add more users as needed
    ];

  }

  ngOnInit() {
    // Retrieve selected request data from the service
    this.requestDataService.getSelectedRequest().subscribe(
      selectedRequest => {
        // Check if value is null
        if(selectedRequest){
          this.viewRequestForm.setValue({
            contractType: selectedRequest.contractType,
            serviceType: selectedRequest.serviceType,
            Subsidiary: selectedRequest.Subsidiary,
            requestedDate: selectedRequest.requestedDate.toISOString().split('T')[0],
            status: selectedRequest.status
          });
        }

      },
      error => {
        console.error('Error retrieving selected request:', error);
      }
    );
  }

 /*  onFileSelected(event: any) {
    // Handle file selection logic here
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
  } */
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    console.log('Selected File:', files);
    // Process the array of files as needed
    // For example, you can store them in a form control or perform other logic
  }
  generateContract() {
    // Redirect to the CreateContractComponent
    this.router.navigate(['/create-contract']);
    console.log('Generating Contract:', this.viewRequestForm.value);
  }

  returnContract() {
    // Redirect to the CreateContractComponent
    this.router.navigate(['/create-contract']);
    console.log('Return Contract:', this.viewRequestForm.value);
  }

  }

