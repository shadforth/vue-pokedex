import Vue from 'vue';
import SearchPanel from '@/components/SearchPanel';
import json from '@/json/data.json';

describe('SearchPanel.vue', () => {
  let Constructor;
  let vm;

  beforeEach(() => {
    Constructor = Vue.extend(SearchPanel);
    vm = new Constructor(SearchPanel).$mount();
  });

  it('should be named correctly', () => {
    expect(SearchPanel.name).to.equal('SearchPanel');
  });

  it('should have a mounted hook', () => {
    expect(typeof SearchPanel.mounted).to.equal('function');
  });

  it('should set correct default data', () => {
    const defaultData = SearchPanel.data();
    expect(typeof SearchPanel.data).to.equal('function');
    expect(defaultData.title).to.equal('Search Panel');
    expect(defaultData.json).to.equal(json);
    expect(defaultData.list.length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.weight).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.height).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.fast_attacks).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.special_attacks).length).to.equal(0);
    expect(defaultData.sortBy).to.equal('id');
    expect(defaultData.sortDesc).to.equal(false);
    expect(defaultData.filter).to.equal(null);
  });

  afterEach(() => {
    vm.$destroy();
  });

});