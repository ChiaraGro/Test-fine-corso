import { IPokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemon!: IPokemon;
  pokemonCatched: IPokemon[] = [];
  pokemonRejected: IPokemon[] = []

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
      this.pokemonService.getPokemon().subscribe((response) => this.pokemon = response)
  }

  catch(){
    this.pokemonCatched.push(this.pokemon);
    this.pokemonService.storageCatched(this.pokemonCatched);
    this.getPokemon();
  }

  reject(){
    this.pokemonRejected.push(this.pokemon);
    this.getPokemon();
  }


}
