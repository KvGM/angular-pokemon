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
  pokeMax: number = 20;
  pages: number[];
  actualPage: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getList(this.actualPage);
  }

  getList(n: number): void {
    this.pokemonList = [];
    if (n === 0 || n === 1) {
      this.actualPage = 0;
    } else {
      this.actualPage = n * 20;
    }
    this.pokemonService.getPokemonList(this.actualPage).subscribe(
      (response) =>
        response.results.forEach((pokemon) => {
          this.pokemonService.getPokemonUrl(pokemon.url).subscribe((res) => {
            this.pokemonList.push(res);
            this.pokemonList.sort((a, b) => a.id - b.id);
          });
        }, this.calcularPages(response.count)),
      (error) => console.log(error)
    );
  }

  calcularPages(total: number): void {
    this.pages = [] as number[];
    for (let cont: number = 1; cont <= total / this.pokeMax; cont++) {
      this.pages.push(cont);
    }
  }
}
