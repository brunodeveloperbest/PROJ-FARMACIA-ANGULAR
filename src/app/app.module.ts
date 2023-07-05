import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProdutosComponent } from './Pages/produtos/produtos.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
