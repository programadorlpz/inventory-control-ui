import { Component } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {

  searchType: string = 'name'; // Tipo de filtro: name, user o date
  searchQuery: string = '';
  startDate: string = '';
  endDate: string = '';
  products: any[] = [];

  constructor(private authService: AuthenticateService) { }

  searchProducts(): void {
    if (this.searchType === 'name') {
      this.authService.searchProductsByName(this.searchQuery).subscribe(data => {
        this.products = data;
      });
    } else if (this.searchType === 'user') {
      this.authService.searchProductsByUser(this.searchQuery).subscribe(data => {
        this.products = data;
      });
    } else if (this.searchType === 'date') {
      this.authService.searchProductsByDate(this.startDate, this.endDate).subscribe(data => {
        this.products = data;
      });
    }
  }
}
