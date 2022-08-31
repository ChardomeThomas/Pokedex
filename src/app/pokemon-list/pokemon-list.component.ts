import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PokeDetail } from '../pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokeApiService]
})
export class PokemonListComponent implements OnInit {
  pokemons: PokeDetail[] = [];
  
  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    
  }
  
  
   getPoke(){
    this.pokeApiService.getPokemonInfo().subscribe(pokemon => {this.pokemons = pokemon; console.log(pokemon)})
    console.log('test');
    
  }
  
}
