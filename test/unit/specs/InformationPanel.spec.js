import Vue from 'vue';
import InformationPanel from '@/components/InformationPanel';
import json from '@/json/data.json';

describe('InformationPanel.vue', () => {
  let Constructor;
  let vm;

  beforeEach(() => {
    Constructor = Vue.extend(InformationPanel);
    vm = new Constructor(InformationPanel).$mount();
  });

  it('should be named correctly', () => {
    expect(InformationPanel.name).to.equal('InformationPanel');
  });

  it('should have a created hook', () => {
    expect(typeof InformationPanel.created).to.equal('function');
  });

  it('should set correct default data', () => {
    const defaultData = InformationPanel.data();
    expect(typeof InformationPanel.data).to.equal('function');
    expect(defaultData.title).to.equal('Information Panel');
    expect(defaultData.json).to.equal(json);
    expect(defaultData.pokemon.id).to.equal('');
    expect(Object.keys(defaultData.pokemon.weight).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.height).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.fast_attacks).length).to.equal(0);
    expect(Object.keys(defaultData.pokemon.special_attacks).length).to.equal(0);
  });

  afterEach(() => {
    vm.$destroy();
  });
});