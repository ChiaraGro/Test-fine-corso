import { IPokemon } from './../models/pokemon';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon():Observable<IPokemon>{
   const pokemonId = Math.ceil(Math.random() * 898);
   return this.http.get<IPokemon>(`${environment.apiUrl}${pokemonId}`)
   }


  storageCatched(pokemonCatched: IPokemon[]): void{
    let data = JSON.parse(localStorage.getItem('pokemonCatched')!);
    if(data){
      data = {...data, ...pokemonCatched};
      localStorage.setItem('pokemonCatched', JSON.stringify(data));
    } else {
      localStorage.setItem('pokemonCatched', JSON.stringify(pokemonCatched));
    }
  }


  storageRejected(pokemonRejected: IPokemon[]): void{
    let data = JSON.parse(localStorage.getItem('pokemonRejected')!);
    if(data){
      data = {...data, ...pokemonRejected};
      localStorage.setItem('pokemonRejected', JSON.stringify(data));
    } else {
      localStorage.setItem('pokemonRejected', JSON.stringify(pokemonRejected));
    }
  }


}
