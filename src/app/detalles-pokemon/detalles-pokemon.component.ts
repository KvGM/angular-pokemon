import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css'],
})
export class DetallesPokemonComponent implements OnInit {
  pokemonId?: number;
  pokemon?: object;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokemonId = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonId(this.pokemonId).subscribe(
      (response) => {
        (this.pokemon = response), console.log(response);
      },
      (error) => console.log(error)
    );
  }
}
