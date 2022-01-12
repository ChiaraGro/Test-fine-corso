import { IPokemon } from './../../../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})
export class CatchComponent implements OnInit {
  @Input() pokemonCatched!: IPokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
