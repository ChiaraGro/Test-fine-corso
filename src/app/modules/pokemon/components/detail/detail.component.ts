import { IPokemon } from './../../../../models/pokemon';
import { PokemonService } from './../../../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService,  private activatedRoute: ActivatedRoute) { }

  pokemons!: IPokemon; //array
  pokemon!: IPokemon;

  ngOnInit(): void {
    this.getPokemon()
  }

   getPokemon() {
    const id = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.pokemons.find((pokemon) => pokemon.id == id);
  }

}
