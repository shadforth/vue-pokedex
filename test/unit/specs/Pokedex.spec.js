import Vue from 'vue';
import Pokedex from '@/components/Pokedex';

describe('Pokedex.vue', () => {
  let Constructor;
  let vm;

  beforeEach(() => {
    Constructor = Vue.extend(Pokedex);
    vm = new Constructor(Pokedex).$mount();
  });

  it('should be named correctly', () => {
    expect(Pokedex.name).to.equal('Pokedex');
  });

  it('should set correct default data', () => {
    const defaultData = Pokedex.data();
    expect(typeof Pokedex.data).to.equal('function');
  });

  afterEach(() => {
    vm.$destroy();
  });
}); 