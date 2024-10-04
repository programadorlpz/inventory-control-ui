import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedRole: string = '';

  constructor(
    private router: Router
  ) { }

  onRoleSelect() {
    if (this.selectedRole === 'administrator') {
      this.router.navigate(['/administrator']);
    } else if (this.selectedRole === 'support') {
      this.router.navigate(['/support']);
    } else if (this.selectedRole === 'salesAdvisor') {
      this.router.navigate(['/user/sales-advisor']);
    }
  }
}
