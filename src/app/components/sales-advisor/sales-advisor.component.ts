import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-sales-advisor',
  templateUrl: './sales-advisor.component.html',
  styleUrls: ['./sales-advisor.component.scss']
})
export class SalesAdvisorComponent implements OnInit {

  products: any[] = [];
  newProduct: any = { name: '', quantity: 0 };
  selectedProduct: any = null;
  userName: string = '';  // Usuario que realiza las acciones

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Carga todos los productos del inventario
  loadProducts(): void {
    this.authService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  // Crea un nuevo producto en el inventario
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

  // Selecciona un producto para editar
  selectProduct(product: any): void {
    this.selectedProduct = { ...product };
  }

  // Actualiza el producto seleccionado
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

  // Elimina un producto del inventario
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
