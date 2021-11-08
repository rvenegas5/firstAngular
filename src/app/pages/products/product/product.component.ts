import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product; // Recibo datos del padre
  @Output() addToCartClick = new EventEmitter<Product>(); // Envio datos al padre con un evento personalizado
  constructor() { }

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }


}
