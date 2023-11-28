import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/Services/backend/backend.service';
//import { PowerAutomateService } from 'src/app/Services/power-automate.service';

@Component({
  selector: 'app-request-for-contract',
  templateUrl: './request-for-contract.component.html',
  styleUrls: ['./request-for-contract.component.scss']
})
export class RequestForContractComponent implements OnInit {
  contractForm: FormGroup;
  subsidiary = new FormControl('');
  subsidiaryList: string[] = ['Group', 'General Business', 'Life', 'Asset Management'];

  constructor(private fb: FormBuilder, private backendService:BackendService) {}

  ngOnInit() {
    this.contractForm = this.fb.group({
      contractType: ['', Validators.required],
      ServiceType: ['', Validators.required],
      Subsidiary: [[], Validators.required],
      terms: ['', Validators.required],
      //quantity: ['', Validators.required],
      parties: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      Narration: ['', Validators.required],
      price: ['', Validators.required],
      attachDocument: [null],
    });

  // Add a listener for changes in the ServiceType field  contractType,ServiceType,subsidiaries,terms,quantity,parties,startDate,endDate,price,attachDocument
  this.contractForm.get('ServiceType').valueChanges.subscribe(serviceType => {
    // Disable/Enable Quantity and Price fields based on the selected Service Type
    if (serviceType === 'NDA') {
      this.contractForm.get('price').disable();
    } else {
      this.contractForm.get('price').enable();
    }
  });
}

trackByFn(index: number, item: string): string {
  return item; // or return a unique identifier if available
}

/* isQuantityDisabled(): boolean {
  return this.contractForm.get('ServiceType').value === 'NDA';
} */

isPriceDisabled(): boolean {
  return this.contractForm.get('ServiceType').value === 'NDA';
}
submitForm() {
  if (this.contractForm.valid) {
    // Send the form data to the Node.js server
    const formData = this.contractForm.value;
    const file = this.contractForm.get('attachDocument').value;

    // Use the ApiService to submit the request
    this.backendService.submitRequest(formData, file).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // You may want to reset the form after successful submission
        this.contractForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        // Handle error
      }
    );
  }
}

}
