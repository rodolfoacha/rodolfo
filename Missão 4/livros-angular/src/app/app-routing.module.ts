import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'lista', component: LivroListaComponent },
    { path: 'dados', component: LivroDadosComponent },
    { path: 'novo', component: LivroDadosComponent },
    { path: '', redirectTo: '/lista', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
