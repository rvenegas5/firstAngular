import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header', // Nombre con el que podemos reutilizar el componente
  templateUrl: './header.component.html', // Lugar en donde esta el html
  styleUrls: ['./header.component.scss'] // Estilos del componente
})
export class HeaderComponent {

  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalActions$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: ShoppingCartService) {};
}
