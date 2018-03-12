import Vue from 'vue'
import Pokedex from '@/components/Pokedex'

describe('Pokedex.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Pokedex);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h2').textContent).to.equal('Pokédex');
  });
});