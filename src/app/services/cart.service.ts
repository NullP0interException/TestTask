import {Injectable} from '@angular/core';
import {Cart} from '../shared/cart/cart';
import {CookieService} from 'ngx-cookie-service';
import {CartItem} from '../shared/cart/cartItem';
import {ObjectSet} from '../shared/object-set/objectSet';
import {Category} from '../shared/catalog/category';
import {CatalogService} from './catalog.service';
import {CatalogItem} from '../shared/catalog/catalogItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  show: boolean;
  cart: Cart;

  constructor(private cookieService: CookieService, private catalogService: CatalogService) {
    this.initCart();
  }

  initCart() {
    // this.cookieService.delete('cart');
    this.cart = new Cart();
    const cookie = this.cookieService.get('cart');
    if (cookie) {
      JSON.parse(cookie).items.forEach((f) => {
        this.cart.items.add(new CartItem(f.id));
      });
    }
  }

  toggleCart() {
    this.show = !this.show;
  }

  getItemCount(): number {
    return this.cart.items.size;
  }

  addToCart(id: string) {
    new ObjectSet<CartItem>().add(new CartItem(id));
    this.cart.items.add(new CartItem(id));
    console.log(this.cart);
    console.log(new Cart());
    this.updateCart();
  }

  updateCart() {
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }

  getCategories(): Category[] {
    const categories = new ObjectSet<Category>();
    this.cart.items.forEach((f) => {
      categories.add(this.catalogService.getCategory(this.catalogService.getItem(f.id).category));
    });
    return [...categories];
  }

  getItems(id: string): CatalogItem[] {
    const items = [];
    this.cart.items.forEach((f) => {
      const item = this.catalogService.getItem(f.id);
      if (item.category === id) {
        items.push(item);
      }
    });
    return items;
  }

  remove(id: string) {
    let itemToRemove = null;
    this.cart.items.forEach((f) => {
      if (f.id === id) {
        itemToRemove = f;
      }
    });
    this.cart.items.delete(itemToRemove);
    this.updateCart();
  }
}
