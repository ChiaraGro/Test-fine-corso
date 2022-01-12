import { PokemonService } from './../../../../services/pokemon.service';
import { IPokemon } from './../../../../models/pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})
export class CatchComponent implements OnInit {
  @Input() pokemonCatched!: IPokemon[];
  @Output() remove = new EventEmitter<IPokemon>();


  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
  }

  removed(pokemon: IPokemon) {
    this.remove.emit(pokemon);
  }

  detail(id: number): void {
    this.pokemonService.getPokemon(); //cercare il pokemon dal service

    this.router.navigate(['pokemon', 'detail', id]); //mi sposto sulla pagina dettagli
  }

  // getPokemon() {
  //   const id = this.activatedRoute.snapshot.params.id;
  //   this.pokemon = this.pokemons.find((pokemon) => pokemon.id == id);
  // }
  //cercare per id
}
