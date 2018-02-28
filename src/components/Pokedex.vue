// HTML
// ============================================================================
<template>
  <b-container fluid>
    <div class="col-md-12">
      <b-row>
        <b-col>
          <h2>{{ title }}</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="pokemon-info-panel">
            <img src="../assets/images/poke-ball.png" style="float:right;">
            <div v-show="Object.keys(pokemon.weight).length > 0">

              <!-- Pokemon header information -->
              <span id="pokemon-id">#{{ pokemon.id }}</span><br>
              <h3>{{ pokemon.name }}</h3>
              <div class="type-box" v-for="type in pokemon.types" :key="type" v-bind:class="type.toLowerCase()">{{ type }}</div>
              <vue-audio class="pokemon-cry" v-if="pokemon.id" :file="getAudio(pokemon.id)"></vue-audio><br>
              <div id="description-container">
                <img id="pokemon-sprite" v-if="pokemon.id" :src="getSprite(pokemon.id)" />
                <p>{{ pokemon.description }}</p>
              </div>

              <!-- Base statistics -->
              <div id="base-stats-container">
                <h4 id="base-stats-title">Base statistics</h4>
                <table class="table responsive">
                  <tr>
                    <td><strong>Height</strong><br>{{ pokemon.height.maximum }}</td>
                    <td><strong>Weight</strong><br>{{ pokemon.weight.maximum }}</td>
                    <td><strong>Type</strong><br><span v-if="pokemon.types">{{ (pokemon.types).join("/") }}</span></td>
                    <td><strong>Generation</strong><br><span v-if="pokemon.generation">{{ pokemon.generation.split(' ')[1] }}</span></td>
                  </tr>
                  <tr>
                    <td><strong>Max HP</strong><br>{{ pokemon.max_hp }}</td>
                    <td><strong>Max CP</strong><br>{{ pokemon.max_cp }}</td>
                    <td><strong>Attack</strong><br>{{ pokemon.base_attack }}</td>
                    <td><strong>Defense</strong><br>{{ pokemon.base_defense }}</td>
                  </tr>
                </table>
              </div>

              <!-- Special attacks -->
              <div id="spec-attack-container">
                <h4 id="spec-attack-title">Special attacks</h4>
                <table class="table responsive">
                  <tr v-for="attack in pokemon.special_attacks" :key="attack.name">
                    <td>{{ attack.name }}</td>
                    <td>{{ attack.damage }} damage</td>
                    <td></td>
                    <td></td>
                    <td><div class="type-box type-box-sml" v-bind:class="attack.type.toLowerCase()">{{ attack.type }}</div></td>
                  </tr>
                </table>
              </div>

              <!-- Evolutionary forms -->
              <div id="evol-container" v-if="pokemon.previous_evolution || pokemon.next_evolution">
                <h4 id="evol-title">Evolutions</h4>
                <table class="table responsive">
                  <tr>
                    <td>
                        <div class="pokemon-evol-sprite-container" v-for="evolution in pokemon.previous_evolution" :key="evolution.id" v-on:click="getPokemon(evolution)">
                          <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)">
                          <p>{{ evolution.name }}</p>
                        </div>
                        <div class="pokemon-evol-sprite-container" v-for="evolution in pokemon.next_evolution" :key="evolution.id" v-on:click="getPokemon(evolution)">
                          <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)">
                          <p>{{ evolution.name }}</p>
                        </div>
                    </td>
                  </tr>
                </table>
              </div>

            </div>
          </div>
        </b-col>

        <b-col>
        <!-- Pokedex table -->
        <div class="panel panel-default">
          <div id="table-overflow">
            <!-- Search bar -->
            <b-form-input id="search-bar" v-model="filter" placeholder="Type to search..." />
            <div id="table-container">
              <b-table hover
                      :fields="fields"
                      :items="list"
                      :filter="filter"
                      class="pokedex-table table-borderless"
                      v-on:row-clicked="getPokemon"
                      :sort-by.sync="sortBy"
                      :sort-desc.sync="sortDesc">
              </b-table>
            </div>
          </div>
        </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

// JavaScript
// ============================================================================
<script>
import json from '../json/data.json';
import VueAudio from 'vue-audio';

export default {
  name: 'Pokedex',
  data () {
    return {
      title: 'Pokédex',
      json: json,
      list: [],
      pokemon: {
        weight: {},
        height: {},
        fast_attacks: {},
        special_attacks: {}
      },
      fields: [
        { key: 'id',    sortable: true  },
        { key: 'name',  sortable: true  },
        { key: 'types', sortable: true  }
      ],
      sortBy: 'id',
      sortDesc: false,
      filter: null,
    }
  },
  components: {
    'vue-audio': VueAudio
  },
  methods: {
    getSprite: function(id) {
      return require('../assets/sprites/' + String(id).padStart(3, "0") + '.png');
    },
    getAudio: function(id) {
      return require('../assets/audio/' + id + '.mp3');
    },
    getPokemon: function(data) {
      if (data != null) {
        let pokeid = data.id;
        if (pokeid.length != 3) {
          pokeid = String(pokeid).padStart(3, "0");
        }
        this.pokemon = json[Number.parseInt(pokeid) - 1];
      }
    }
  },
  mounted: function() {
    for (let i in json) {
      let object = {};
      object.id = json[i].id;
      object.name = json[i].name;
      object.types = json[i].types.join("/");
      this.list.push(object);
    }
    this.getPokemon(json[0]);
  }
}
</script>

// CSS
// ============================================================================
<style lang="scss" scoped>

$maincolor: #D93E39;
$white: #FFFFFF;

/* Fonts */
h2 {
  font-size: 14px;
  font-weight: bold;
  color: lighten($maincolor, 40%);
}

h4 {
  font-size: 14px;
  font-weight: bold;
}

/* Search table */
#table-overflow {
  overflow: hidden;
}

#table-container {
  height: 752px;
  border: 2px solid $maincolor;
  border-top: none;
  border-radius: 0.35rem;
  overflow: auto;
  background: $white;
}

#table-container::-webkit-scrollbar {
  display: none;
}

.pokedex-table {
  padding: 15px;
  background: $white;
  cursor: pointer;
}

/* Pokemon */
#pokemon-info-panel {
  min-height: 680px;
  margin: 0 0 5px 0;
  border-radius: 0.25rem;
  padding: 15px 15px 0 15px;
  background-color: $white;
}

#pokemon-info-panel h3 {
  margin-bottom: 5px;
}

#pokemon-id {
  color: #AAAAAA;
}

#pokemon-sprite {
  margin: 0 auto;
  display: block;
  padding: 5px;
}

.pokemon-evol-sprite-container {
  float: left;
  display: block;
  margin: 5px;
  border-radius: 0.25rem;
  padding: 0 10px;
  background-color: #F0F0F0;
  text-align: center;
  cursor: pointer;
}

.pokemon-evol-sprite-container:hover {
  background-color: #F3F3F3;
}

.pokemon-evol-sprite-container p {
  text-align: center;
  margin-bottom: 5px;
  color: #777777;
}

#spec-attack-container, #evol-container {
  margin: 15px 0;
}

/* Pokemon types */
.type-box {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.175rem 0.5rem 0.160rem 0.5rem;
    margin: 7px 7.5px 7px 0;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.5;
    border-radius: 0.25rem;
    color: #FFFFFF;
  }

.type-box-sml {
  margin: 0;
}

/* Vue audio */
.pokemon-cry {
  display: inline-block;
}

/* Search bar */
#search-bar {
  margin: -2px 0 10px 0;
  border: 2px solid #D93E39;
}

/* Responsive */
@media only screen 
  and (max-width: 1024px) {
    #description-container {
      padding: 5px 0 10px 0;
      margin: 5px 0;
    }
    #pokemon-sprite {
      display: block;
      float: left;
      padding: 5px;
    }
}

@media only screen 
  and (max-width: 810px) {
    .pokemon-evol-sprite-container {
      float: none;
    }
    #pokemon-info-panel {
      margin: 0 0 15px 0;
    }
}

</style>
