import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../services/catalog.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  constructor(private catalogService: CatalogService, private cartService: CartService) {
  }

  ngOnInit() {
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

}
