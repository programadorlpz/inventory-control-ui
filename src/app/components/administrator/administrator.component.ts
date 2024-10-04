import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service'; // Servicio para interactuar con el backend

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  users: any[] = [];  // Almacena la lista de usuarios
  newUser: any = { name: '', age: 0, position: '' };  // Almacena los datos del nuevo usuario
  positions: string[] = ['Asesor de ventas', 'Administrador', 'Soporte'];  // Posibles posiciones

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Carga la lista de usuarios desde el backend
  loadUsers(): void {
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  // Crea un nuevo usuario y lo guarda en la base de datos
  createUser(): void {
    if (this.newUser.name === '' || this.newUser.age <= 0 || this.newUser.position === '') {
      alert('Por favor complete todos los campos');
      return;
    }

    this.authService.createUser(this.newUser).subscribe(response => {
      alert('Usuario creado exitosamente');
      this.loadUsers();
      this.newUser = { name: '', age: 0, position: '' };
    }, error => {
      alert('Error al crear usuario: ' + error.message);
    });
  }
}
