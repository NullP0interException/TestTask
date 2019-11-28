import {SetItem} from './setItem';

export class ObjectSet<T extends SetItem> extends Set<T> {

  add(value: T): this {
    let has = false;
    this.forEach((f) => {
      if (value.equals(f)) {
        has = true;
      }
    });
    if (!has) {
      super.add(value);
    }
    return this;
  }

  toJSON(): any {
    return [...this];
  }

}
