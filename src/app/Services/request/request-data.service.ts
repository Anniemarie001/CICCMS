import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RequestElement {
  position: number;
  contractType: string;
  serviceType: string;
  Subsidiary: string;
  requestedDate: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  private selectedRequestSubject = new BehaviorSubject<RequestElement | null>(null);

  getSelectedRequest(): Observable<RequestElement | null> {
    return this.selectedRequestSubject.asObservable();
  }

  setSelectedRequest(request: RequestElement): void {
    this.selectedRequestSubject.next(request);
  }
}
