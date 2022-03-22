import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private isDrawerOpen: boolean = false;

  public drawerOpenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isDrawerOpen);

  constructor() {
    this.drawerOpenSubject.subscribe((value) => {
      this.isDrawerOpen = value;
    });
  }

  getDrawerStatus() {
    return this.isDrawerOpen;
  }

  toggleDrawer() {
    this.drawerOpenSubject.next(!this.isDrawerOpen);
  }
}
