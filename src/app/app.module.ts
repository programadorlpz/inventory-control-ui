import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { SupportComponent } from './components/support/support.component';
import { SalesAdvisorComponent } from './components/sales-advisor/sales-advisor.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministratorComponent,
    SupportComponent,
    SalesAdvisorComponent,
    ProductManagementComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
