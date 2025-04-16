import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MockProduct } from '../../../data/mock-product';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //constructor() { }

  private products: Product[] = [...MockProduct];
  private productSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts() : Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  addProduct(product: Product): Observable<Product> {
    // return new Observable<Product>(observer => {
    //   product.id = Date.now(); // Generate a unique ID for the new product
    //   this.products.push(product);
    //   this.productSubject.next(this.products);
    //   observer.next(product);
    //   observer.complete();
    // });
    const updated = [...this.productSubject.value, { ...product, id: Date.now() }];
    this.products.push(product);
    this.productSubject.next(updated);
    return of(product);
  }

  updateProduct(product: Product): Observable<Product> {
    return new Observable<Product>(observer => {
      const index = this.products.findIndex(product => product.id === product.id);
      if (index !== -1) {
        this.products[index] = product;
        this.productSubject.next(this.products);
        observer.next(product);
        observer.complete();
      } else {
        observer.error(new Error('Product not found'));
      }
    });
    // const updated = this.productSubject.value.map(p => p.id === product.id ? product : p);
    // this.productSubject.next(updated);
    // return of(product);
  }

  removeProduct(id: number): Observable<void> {
    return new Observable<void>(observer => {
      this.products = this.products.filter(product => product.id !== id);
      this.productSubject.next(this.products);
      observer.next();
      observer.complete();
    });
  }

  getProductById(id: number): Observable<Product | undefined> {
    return new Observable<Product | undefined>(observer => {
      const product = this.products.find(product => product.id === id);
      observer.next(product);
      observer.complete();
    });
  }
}
