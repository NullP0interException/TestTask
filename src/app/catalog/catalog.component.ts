import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../services/catalog.service';
import {Catalog} from '../shared/catalog/catalog';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog: Catalog;

  constructor(private catalogService: CatalogService, private cartService: CartService) {
  }

  ngOnInit() {
  }
}



