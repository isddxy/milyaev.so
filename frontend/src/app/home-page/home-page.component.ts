import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl'],
  animations: [
    trigger('page', [
      transition(':enter', [
        style({
          opacity: 0,
          height: 0,
          transform: 'scale(0.8)'
        }  ),
        animate('.6s ease-in')
      ]),
      transition(':leave', [
        style({ opacity: 1 } ),
        animate('.4s ease-out')
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
