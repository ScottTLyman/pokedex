import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";
import { Pop } from "../Utils/Pop.js";

async function _getWildPokemon() {
  try {
    await pokeApiService.getWildPokemon()
  } catch (error) {
    Pop.toast(error.message, 'error')
    console.error(error)
  }
}
function _drawActivePokemon() {
  let pokemon = ProxyState.activePokemon
  if (pokemon.name) {
    document.getElementById('pokemon-info').innerHTML = ProxyState.activePokemon.Template
  } else {
    document.getElementById('pokemon-info').innerHTML = 'Catch a Pokemon!'
  }
}
function _drawWildPokemon() {
  let template = ''
  ProxyState.wildPokemon.forEach(p => template += `<li class="selectable fs-5" onclick="app.pokeApiController.getActivePokemon('${p.name}')">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</li>`)
  document.getElementById('pokemon').innerHTML = template
}
export class PokeApiController {
  constructor() {
    console.log('pokeAPI controller loaded')
    ProxyState.on('wildPokemon', _drawWildPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)
    _getWildPokemon()
    _drawActivePokemon()


  }
  async getActivePokemon(name) {
    try {
      console.log('[service getting active Pokemon]', name)
      await pokeApiService.getActivePokemon(name)
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error)
    }
  }

}