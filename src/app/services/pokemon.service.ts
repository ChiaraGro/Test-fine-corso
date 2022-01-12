import { IPokemon } from './../models/pokemon';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(){
   const pokemonId = Math.ceil(Math.random() * 898);
   return this.http.get<IPokemon>(`${environment.apiUrl}${pokemonId}`)
   }
}
