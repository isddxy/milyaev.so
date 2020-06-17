import {Component, Input, OnInit} from '@angular/core';
import {SidebarMenu} from "../sidebar.component";

export interface SubMenuItem {
  name: string
  link: string
}
@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.styl']
})
export class SidebarItemComponent implements OnInit {
  @Input() item: SidebarMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
