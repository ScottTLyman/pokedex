export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.abilities = data.abilities
    this.exp = data.base_experience
    this.type = data.types[0].type.name
    this.imgUrlSprite = data.sprites.front_default
    this.imgUrlMain = data.sprites.other['official-artwork'].front_default
  }

  get Template() {
    return `
    <div class="rounded-top sticky-top shadow mt-2 bg-light text-center">
      <h3>
        <img class="img-fluid contain" src="${this.imgUrlMain}"
          alt="Pokemon image">
          <div> ${this.name.charAt(0).toUpperCase() + this.name.slice(1)}</div>
      </h3>
      <div class="bg-secondary p-2 fs-6">
      <p><small>Ht: ${this.height} dm | Wt: ${this.weight} g | Exp: ${this.exp}</small></p>
      <p><small>Type: ${this.type.charAt(0).toUpperCase() + this.type.slice(1)}</small></p>
      </div>
      <button class="btn btn-outline-secondary my-2">Add to PokeDex</button>
    </div>`
  }
}