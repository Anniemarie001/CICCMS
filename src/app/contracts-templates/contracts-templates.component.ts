import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contracts-templates',
  templateUrl: './contracts-templates.component.html',
  styleUrls: ['./contracts-templates.component.scss']
})
export class ContractsTemplatesComponent {
  templates = [
    { id: 1, name: 'Sales Agreement' },
    { id: 2, name: 'Service Agreement/Contract' },
    { id: 3, name: 'Employment Contract' },
    { id: 4, name: 'Insurance Policies' },
    { id: 5, name: 'Nondisclosure Agreement (NDA) or Confidentiality Agreement' },
    { id: 6, name: 'Partnership Agreement' },
    { id: 7, name: 'Construction Contract' },
    // Add more templates as needed
  ];

  constructor(private router: Router) { }

  redirectToRequestForm(templateId: number) {
    let redirectionUrl = '';

    // Use if conditions to map template IDs to specific SharePoint URLs
    if (templateId === 1) {
      redirectionUrl = '/request-for-contract';
    } else if (templateId === 2) {
      redirectionUrl = '/request-for-contract';
    }
    else {
      // Add more conditions as needed for additional templates
      // If templateId doesn't match any condition, you can set a default URL or handle it accordingly
    }

    // Redirect to the calculated SharePoint URL
    window.location.href = redirectionUrl;
  }
}
