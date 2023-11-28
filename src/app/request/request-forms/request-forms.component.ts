import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-forms',
  templateUrl: './request-forms.component.html',
  styleUrls: ['./request-forms.component.scss']
})
export class RequestFormsComponent {
  templates = [
    { id: 1, name: 'Sales Agreement', description: 'For contracts related to the sales of products.' },
    { id: 2, name: 'Service Agreement/Contract',description: 'Services offered' },
    { id: 3, name: 'Employment Contract',description: 'staff contracts' },
    { id: 4, name: 'Insurance Policies',description: 'insurance policies for all products' },
    { id: 5, name: 'Nondisclosure Agreement (NDA) or Confidentiality Agreement',description: 'Confidential agreements'},
    { id: 6, name: 'Partnership Agreement',description: ''},
    { id: 7, name: 'Construction Contract',description: 'construction plans' },
    // Add more templates as needed
  ];

  redirectToRequestForm(templateId: number) {
    let redirectionUrl = '';

    // Use if conditions to map template IDs to specific SharePoint URLs
    if (templateId === 1) {
      redirectionUrl = '/request-for-contract';
    } else if (templateId === 2) {
      redirectionUrl = '/request-for-contract';
    }
    else {
      redirectionUrl = '/request-for-contract';
      // Add more conditions as needed for additional templates
      // If templateId doesn't match any condition, you can set a default URL or handle it accordingly
    }

    // Redirect to the calculated SharePoint URL
    window.location.href = redirectionUrl;
  }
  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef;


  constructor(private router: Router) {}

  chooseFromTemplates() {
    this.router.navigate(['/contracts-templates']);

  }


  attachFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }


}
