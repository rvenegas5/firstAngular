import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product} from "./interfaces/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor( private productSVC: ProductsService) {

   }

  ngOnInit(): void {
    this.productSVC.getProducts()
    .pipe( 
      tap((products: Product[]) => this.products = products)
    )
    .subscribe();
  }

}
