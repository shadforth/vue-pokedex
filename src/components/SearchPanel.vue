// HTML
// ============================================================================
<template>
  <div class="panel panel-default">
    <div id="table-overflow">
      <b-form-input id="search-bar" v-model="filter" placeholder="Type to search..." />
      <div id="table-container">
        <b-table hover
                class="pokedex-table table-borderless"
                :fields="fields"
                :items="list"
                :filter="filter"
                v-on:row-clicked="getPokemon"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc">
        </b-table>
      </div>
    </div>
  </div>
</template>

// JavaScript
// ============================================================================
<script>
import json from "../json/data.json";
import EventBus from "../event-bus";

export default {
  name: "SearchPanel",
  data () {
    return {
      title: "Search Panel",
      json: json,
      list: [],
      pokemon: {
        weight: {},
        height: {},
        fast_attacks: {},
        special_attacks: {}
      },
      fields: [
        { key: "id",    sortable: true  },
        { key: "name",  sortable: true  },
        { key: "types", sortable: true  }
      ],
      sortBy: "id",
      sortDesc: false,
      filter: null,
    }
  },
  methods: {
    getPokemon: function(data) {
      if (data != null) {
        let pokeid = data.id;
        if (pokeid.length != 3) {
          pokeid = String(pokeid).padStart(3, "0");
        }
        this.pokemon = json[parseInt(pokeid) - 1];
        EventBus.$emit("getPokemon", this.pokemon);
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

/* Search bar */
#search-bar {
  margin: -2px 0 10px 0;
  border: 2px solid $maincolor;
}

</style>