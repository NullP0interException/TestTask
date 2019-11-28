import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class CartComponent implements OnInit {

  show: boolean;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

}
