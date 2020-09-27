import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

const routes: Routes = [
  { path: 'processos', loadChildren: () => import('./processo/processo.module')
      .then(l => l.ProcessoModule)},
  { path: 'usuarios', loadChildren: () => import('./usuario/usuario.module')
      .then(u => u.UsuarioModule)},
  { path: '', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
