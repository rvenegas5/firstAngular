import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header', // Nombre con el que podemos reutilizar el componente
  templateUrl: './header.component.html', // Lugar en donde esta el html
  styleUrls: ['./header.component.scss'] // Estilos del componente
})
export class HeaderComponent {

  constructor(private router: Router) {};

  goToCheckOut(): void { // Para hacer la redireccion necesito el router del componente
    this.router.navigate(['/checkout']);
  }
}
