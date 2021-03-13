import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit() {
    await this.pokemonService.getPokemonList().subscribe(
      (response) =>
        response.results.forEach((pokemon) => {
          this.pokemonService.getPokemon(pokemon.url).subscribe((res) => {
            this.pokemonList.push(res);
            this.pokemonList.sort((a, b) => a.order - b.order);
          });
          console.log(this.pokemonList);
        }),
      (error) => console.log(error),
      () => console.log('Petición completada'),
    );
  }
}
