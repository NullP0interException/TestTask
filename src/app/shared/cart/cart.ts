import {CartItem} from './cartItem';
import {ObjectSet} from '../object-set/objectSet';

export class Cart {

  items: Set<CartItem> = new ObjectSet();

  constructor() {
    this.items = new ObjectSet<CartItem>();
  }
}
