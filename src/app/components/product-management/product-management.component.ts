import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  products: any[] = [];
  newProduct: any = { name: '', quantity: 0 };
  selectedProduct: any = null;
  userName: string = '';  // Nombre del usuario que realiza las acciones

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.authService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  createProduct(): void {
    if (this.userName === '' || this.newProduct.name === '' || this.newProduct.quantity <= 0) {
      alert('Por favor complete todos los campos');
      return;
    }

    this.authService.createProduct(this.newProduct, this.userName).subscribe(response => {
      alert('Producto creado exitosamente');
      this.loadProducts();
      this.newProduct = { name: '', quantity: 0 };
    }, error => {
      alert('Error al crear producto: ' + error.message);
    });
  }

  selectProduct(product: any): void {
    this.selectedProduct = { ...product }; // Clona el producto seleccionado
  }

  updateProduct(): void {
    if (this.userName === '' || this.selectedProduct.name === '' || this.selectedProduct.quantity <= 0) {
      alert('Por favor complete todos los campos');
      return;
    }

    this.authService.updateProduct(this.selectedProduct.id, this.selectedProduct, this.userName).subscribe(response => {
      alert('Producto actualizado exitosamente');
      this.loadProducts();
      this.selectedProduct = null;
    }, error => {
      alert('Error al actualizar producto: ' + error.message);
    });
  }

  deleteProduct(productId: number): void {
    if (this.userName === '') {
      alert('Debe seleccionar un usuario');
      return;
    }

    this.authService.deleteProduct(productId, this.userName).subscribe(response => {
      alert('Producto eliminado exitosamente');
      this.loadProducts();
    }, error => {
      alert('Error al eliminar producto: ' + error.message);
    });
  }
}
