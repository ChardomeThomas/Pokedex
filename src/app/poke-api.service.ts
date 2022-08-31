import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail } from './pokemon';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  
  public url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  constructor( private http: HttpClient) { }

  getPokemonInfo() :  Observable<PokeDetail[]> {
    return this.http.get<PokeDetail[]>(this.url);
  }
  // getPokemonInfo(id: string ) :  Observable <PokeDetail> {
  //   return this.http.get<PokeDetail>(this.url + id + '/');
  // }

}
