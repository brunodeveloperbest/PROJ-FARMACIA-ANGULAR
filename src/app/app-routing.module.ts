import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LoginModule } from './Pages/login/login.module';
import { ClientesModule } from './Pages/clientes/clientes.module';
import { ProdutosModule } from './Pages/produtos/produtos.module';
import { ProdutosComponent } from './Pages/produtos/produtos.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./Pages/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./Pages/produtos/produtos.module').then(m => m.ProdutosModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
