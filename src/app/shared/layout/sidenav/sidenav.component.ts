import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.onDrawerStatusChange();
  }

  isDrawerOpen: boolean = this.sidenavService.getDrawerStatus();

  toggleDrawer() {
    this.sidenavService.toggleDrawer();
  }

  onDrawerStatusChange() {
    this.sidenavService.drawerOpenSubject.subscribe((drawerStatus: boolean) => {
      this.isDrawerOpen = drawerStatus;
    });
  }
}
