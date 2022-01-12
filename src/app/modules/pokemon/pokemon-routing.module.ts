import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'detail/:id', component: DetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
