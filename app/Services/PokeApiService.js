import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiService {
  async getActivePokemon(name) {
    const res = await pokeApi.get(name)
    console.log('get active pokemon', res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
  async getWildPokemon() {
    const res = await pokeApi.get('?limit=151')
    console.log('[pokeApiService]: getting pokemon', res.data)
    ProxyState.wildPokemon = res.data.results
  }


}

export const pokeApiService = new PokeApiService()