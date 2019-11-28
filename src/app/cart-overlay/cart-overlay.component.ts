import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.css']
})
export class CartOverlayComponent implements OnInit {

  show: boolean;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

}
