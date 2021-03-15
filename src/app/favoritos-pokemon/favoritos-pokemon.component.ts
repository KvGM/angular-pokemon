import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-favoritos-pokemon',
  templateUrl: './favoritos-pokemon.component.html',
  styleUrls: ['./favoritos-pokemon.component.css'],
})
export class FavoritosPokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  favoritos: number[] = [6, 249, 94];
  pokeFavoritos: any[] = [];

  ngOnInit() {
    this.favoritos.forEach((favorito) => {
      this.getFavorito(favorito);
    });
  }

  getFavorito(n: number): void {
    this.pokemonService.getPokemonId(n).subscribe(
      (response) => {
        this.pokeFavoritos.push(response);
      },
      (error) => console.log(error)
    );
  }
}
