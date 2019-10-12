import { Component } from '@angular/core';
import {PokedexService} from './services/pokedex.service';
import {Pokemon} from './models/pokemon.model';
import {Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'hacknc-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent  {

  private _subscription: Subscription;

  title = 'HackNC - Pokedex';
  searchTerm: string;
  pokemon: Pokemon;

  constructor(private pokedexService: PokedexService) {}

  onSearchTermChange(): void {
    this.pokedexSearch(this.searchTerm);
  }

  private pokedexSearch(term: string): void {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
    this._subscription = this.pokedexService.pokemonSearch(term).pipe(delay(200)).subscribe(response => {
      this.pokemon = response;
    });
  }
}
