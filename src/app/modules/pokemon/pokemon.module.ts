import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { CatchComponent } from './components/catch/catch.component';
import { RejectComponent } from './components/reject/reject.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    PokemonComponent,
    CatchComponent,
    RejectComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
