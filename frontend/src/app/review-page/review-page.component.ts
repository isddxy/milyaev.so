import {Component, OnInit, Output} from '@angular/core';
import {SidebarMenu} from "../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.styl']
})
export class ReviewPageComponent implements OnInit {

  @Output() sidebarMenu: SidebarMenu[] = [
    {
      name: 'Тест',
      link: ''
    },
    {
      name: 'Описание',
      link: '/description',
      submenu: [
        {name: 'Идея', link: '/idea'},
        {name: 'Какую проблему решает?', link: '/problems'},
        {name: 'Детальное описание проекта', link: '/details'},
        {name: 'Найминг / слоган', link: '/naming'},
      ]
    },
    {
      name: 'Design',
      link: '/design',
      submenu: [
        {name: 'Logotype', link: '/logotype'},
        {name: 'Identity', link: '/identity'},
        {name: 'Brand', link: '/brand'},
        {name: 'Prototype', link: '/prototype'},
        {name: 'Product design', link: '/product'},
        {name: 'Digital design', link: '/digital'}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
