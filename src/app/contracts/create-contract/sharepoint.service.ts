import { Injectable } from '@angular/core';
import { sp, IFileAddResult } from '@pnp/sp/presets/all';

@Injectable({
  providedIn: 'root',
})
export class SharePointService {
  uploadFile(file: File): Promise<IFileAddResult> {
    const folderUrl = 'https://cickenya.sharepoint.com/sites/ICTDepartment/Contracts';
    const endpoint = `/ICTDepartment/Contracts/${file.name}`;

    return sp.web.getFileByServerRelativePath(endpoint).setContentChunked(file)
      .then((response: IFileAddResult) => response)
      .catch((error) => {
        console.error('Error uploading file:', error);
        throw error; // Rethrow the error to propagate it to the calling component
      });
  }
}
