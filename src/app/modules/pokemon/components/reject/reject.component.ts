import { IPokemon } from './../../../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {
  @Input() pokemonRejected!: IPokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
