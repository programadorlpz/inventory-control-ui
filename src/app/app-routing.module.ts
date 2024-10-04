import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { SupportComponent } from './components/support/support.component';
import { SalesAdvisorComponent } from './components/sales-advisor/sales-advisor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'support', component: SupportComponent },
  { path: 'user/sales-advisor', component: SalesAdvisorComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
