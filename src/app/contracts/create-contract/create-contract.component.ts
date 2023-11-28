import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharePointService } from './sharepoint.service';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent {
 
  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef;


  constructor(private router: Router, private sharePointService: SharePointService) {}

  chooseFromTemplates() {
    this.router.navigate(['/contracts-templates']);
    
  }

  designFromScratch() {
    window.open('https://cickenya.sharepoint.com/sites/ICTDepartment/Contracts/Forms/AllItems.aspx?id=%2Fsites%2FICTDepartment%2FContracts%2FNew%20Contracts&viewid=d7f206f7%2D7761%2D45b2%2D852c%2D07a825d7fab1/', '_blank');
  }

  attachFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.sharePointService.uploadFile(file).then((response) => {
        console.log('File uploaded successfully:', response);
      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    }
  }
}
