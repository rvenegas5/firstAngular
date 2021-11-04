import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/pages/products/interfaces/product.interface";

@Injectable(
  {providedIn: 'root'}
)

export class ShoppingCartService {
  products: Product[] = [];

  // Declaration of  observable properties
  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  // Declarations of getters for my private properties
  get totalActions$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  // This is  a intermediate method between components
  updateCart(product: Product): void {
    this.addTocart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  // Declaration of my private methods
  private addTocart(product: Product): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.products.reduce( (acc, prod) => acc += prod.price , 0);
    this.totalSubject.next(total);
  }
}
