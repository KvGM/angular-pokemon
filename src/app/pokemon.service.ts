import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = "https://pokeapi.co/api/v2/";

  constructor(
    private httpClient: HttpClient
  ) { }

  //Revisar para pasar observables de interface Pokemon

  getPokemonList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl+'pokemon?limit=20&offset=0');
  }

  getPokemon(url: string){
    return this.httpClient.get<any>(url);
  }

}
