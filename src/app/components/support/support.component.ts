import { Component } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  searchType: string = 'name';  // Tipo de filtro (nombre, usuario, fecha)
  searchQuery: string = '';
  startDate: string = '';
  endDate: string = '';
  products: any[] = [];

  constructor(private authService: AuthenticateService) { }

  // Realiza la búsqueda basada en el tipo de filtro seleccionado
  searchProducts(): void {
    if (this.searchType === 'name') {
      this.authService.searchProductsByName(this.searchQuery).subscribe(products => {
        this.products = products;
      });
    } else if (this.searchType === 'user') {
      this.authService.searchProductsByUser(this.searchQuery).subscribe(products => {
        this.products = products;
      });
    } else if (this.searchType === 'date') {
      this.authService.searchProductsByDate(this.startDate, this.endDate).subscribe(products => {
        this.products = products;
      });
    }
  }
}
