import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from '../models/pokemon.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PokedexService {

  readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  pokemonSearch(term: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${term}`);
  }
}