import {Injectable} from '@angular/core';
import {Catalog} from '../shared/catalog/catalog';
import 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CatalogItem} from '../shared/catalog/catalogItem';
import {Category} from '../shared/catalog/category';
import {plainToClass} from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private catalog: Catalog;
  private subscriber;

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(): Catalog {
    this.initCatalog();
    return this.catalog;
  }

  getItems(category: string): CatalogItem[] {
    this.initCatalog();
    return this.catalog.items.filter((f) => {
      return f.category === category;
    });
  }

  getCategory(id: string): Category {
    this.initCatalog();
    return plainToClass(Category, this.catalog.categories.filter((f) => {
      return f.id === id;
    })[0]);
  }

  getItem(id: string): CatalogItem {
    this.initCatalog();
    return this.catalog.items.filter((f) => {
      return f.id === id;
    })[0];
  }

  initCatalog() {
    if (!this.subscriber) {
      this.subscriber = this.httpClient.get('http://localhost:3000/catalog').subscribe((f) => {
        this.catalog = f as Catalog;
      });
    }
  }
}
