import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritosPokemonComponent } from './favoritos-pokemon/favoritos-pokemon.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { DetallesPokemonComponent } from './detalles-pokemon/detalles-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: '/favoritos', pathMatch: 'full' },
  { path: 'lista', component: ListaPokemonComponent },
  { path: 'favoritos', component: FavoritosPokemonComponent },
  { path: 'detalles/:id', component: DetallesPokemonComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
