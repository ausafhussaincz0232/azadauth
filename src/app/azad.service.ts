import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AzadService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  constructor() {}
}
