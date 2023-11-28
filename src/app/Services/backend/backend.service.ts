import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/Environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  //private apiUrl='http://127.0.0.1:3000/api/data';
  Base_Url: string=environment.Backend_Url


  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.Base_Url)
  }
  submitRequest(formData: any, file: File): Observable<any> {
    const formDataWithFile = new FormData();
    formDataWithFile.append('document', file);
    formDataWithFile.append('contractType', formData.contractType);
    // Add other form data properties...

    return this.http.post<any>(`${this.Base_Url}submitRequest`, formDataWithFile);
  }

}
