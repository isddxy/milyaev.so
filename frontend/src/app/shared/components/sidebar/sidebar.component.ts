import {Component, Input, OnInit} from '@angular/core';
import {SubMenuItem} from "./sidebar-item/sidebar-item.component";

export interface SidebarMenu {
  name: string
  link: string
  submenu?: SubMenuItem[]
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarMenu: SidebarMenu[];
  constructor() { }
  
  
  ngOnInit(): void {
    console.log(this.sidebarMenu)
  }

}
