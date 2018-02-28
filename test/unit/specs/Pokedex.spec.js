import Vue from 'vue'
import Pokedex from '@/components/Pokedex'

describe('Pokedex.vue', () => {
  it('should render correct contents', () => {
    const constructor = Vue.extend(Pokedex);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h2').textContent)
    .toEqual('Pokédex');
  });
});

describe('Pokedex.vue', () => {
  it('should populate JSON array with all Pokémon', () => {
    const constructor = Vue.extend(Pokedex);
    const vm = new Constructor().$mount();
    expect(vm.json.length).toBe(251);
  });
});