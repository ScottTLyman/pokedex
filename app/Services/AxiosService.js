// @ts-ignore
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 5000
})

// @ts-ignore
export const pokeSandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/scottL/pokemon',
  timeout: 5000
})