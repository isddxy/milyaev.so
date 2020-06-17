import {Component, Input, OnInit} from '@angular/core';
import {SidebarMenu} from "../sidebar.component";

@Component({
  selector: 'app-sidebar-sub-item',
  templateUrl: './sidebar-sub-item.component.html',
  styleUrls: ['./sidebar-sub-item.component.styl']
})
export class SidebarSubItemComponent implements OnInit {
  @Input() item: SidebarMenu;
  @Input() parentLink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
