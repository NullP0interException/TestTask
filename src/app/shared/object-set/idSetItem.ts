import {SetItem} from './setItem';

export class IdSetItem implements SetItem {

  id: string;

  equals(other: IdSetItem): boolean {
    return this.id === other.id;
  }
}
