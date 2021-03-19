import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemonList(n: number): Observable<any> {
    return this.httpClient.get<any>(apiUrl + 'pokemon?limit=20&offset=' + n);
  }

  getPokemonUrl(url: string) {
    return this.httpClient.get<any>(url);
  }

  getPokemonId(n: number) {
    return this.httpClient.get<any>(`${apiUrl}pokemon/${n}`);
  }
}
