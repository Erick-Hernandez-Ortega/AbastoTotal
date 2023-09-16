import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { InventoryButtonsComponent } from './components/inventory/inventory-buttons/inventory-buttons.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliersButtonsComponent } from './components/suppliers/suppliers-buttons/suppliers-buttons.component';
import { TableSuppliersComponent } from './components/table-suppliers/table-suppliers.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersButtonsComponent } from './components/customers/customers-buttons/customers-buttons.component';
import { TableCustomersComponent } from './components/table-customers/table-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LoaderComponent,
    InicioComponent,
    RegisterComponent,
    ModalComponent,
    DashboardComponent,
    HeaderComponent,
    InventoryComponent,
    InventoryTableComponent,
    InventoryButtonsComponent,
    SuppliersComponent,
    SuppliersButtonsComponent,
    TableSuppliersComponent,
    CustomersComponent,
    CustomersButtonsComponent,
    TableCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Para aplicar el two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
