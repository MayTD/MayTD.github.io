import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
