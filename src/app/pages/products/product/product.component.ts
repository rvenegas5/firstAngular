import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product; // Recibo datos del padre
  @Output() addToCartClick = new EventEmitter<Product>(); // Envio datos al padre con un evento personalizado
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }


}
