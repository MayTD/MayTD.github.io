import { Component, Input } from '@angular/core';
import { ListItem } from './list-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list!: ListItem;
  @Input() sectionTitle!: string;

  constructor() {}
}
