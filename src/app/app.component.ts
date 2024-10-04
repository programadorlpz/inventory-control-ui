import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedRole: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Al cargar la página, verificamos si hay un rol guardado en el localStorage
    const storedRole = localStorage.getItem('selectedRole');
    if (storedRole) {
      this.selectedRole = storedRole;
      this.navigateToRole(storedRole);  // Navega automáticamente a la página correspondiente si el rol está guardado
    }
  }

  onRoleSelect() {
    // Guarda el rol seleccionado en localStorage
    localStorage.setItem('selectedRole', this.selectedRole);
    this.navigateToRole(this.selectedRole);
  }

  navigateToRole(role: string) {
    // Redirige a la página correspondiente según el rol seleccionado
    if (role === '') {
      this.router.navigate(['/home']);
    } else if (role === 'administrator') {
      this.router.navigate(['/administrator']);
    } else if (role === 'support') {
      this.router.navigate(['/support']);
    } else if (role === 'salesAdvisor') {
      this.router.navigate(['/user/sales-advisor']);
    }
  }
}
