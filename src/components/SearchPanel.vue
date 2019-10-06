<template>
  <div class="panel panel-default">
    <div id="table-overflow">
      <b-form-input
        id="search-bar"
        v-model="filter"
        placeholder="Type to search..."
      />
      <div id="table-container">
        <b-table
          hover
          class="pokedex-table table-borderless"
          :fields="fields"
          :items="list"
          :filter="filter"
          v-on:row-clicked="getPokemon"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../json/data.json";
import EventBus from "../event-bus";

export default {
  name: "SearchPanel",
  data() {
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
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "types", sortable: true }
      ],
      sortBy: "id",
      sortDesc: false,
      filter: null
    };
  },
  methods: {
    /** 
     * Retrieve the Pokemon JSON object from data.json.
     */
    getPokemon: data => {
      if (data != null) {
        let pokeid = data.id;
        if (pokeid.length != 3) {
          pokeid = String(pokeid).padStart(3, "0");
        }
        data.pokemon = json[parseInt(pokeid) - 1];
        EventBus.$emit("getPokemon", data.pokemon);
      }
    }
  },
  /** 
   * Populate search panel with Pokemon.
   */
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
};
</script>

<style lang="scss" scoped>
@import "../assets/css/colours";

.panel {
  padding: 50px 50px 0 50px;
}

/* Search table */
#table-overflow {
  overflow: hidden;
}

#table-container {
  height: 80vh;
  width: 100%;
  border: none;
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
  width: 100%;
  margin: 0 0 20px 0;
  border: none;
  border-bottom: 3px solid lighten($lightgrey, 28%);
  border-radius: 0;
  padding: 20px;
  background: lighten($lightgrey, 28%);
  transition: border 0.2s linear;
}

#search-bar,
#search-bar:focus,
#search-bar::placeholder {
  color: $grey;
}

#search-bar:focus {
  border-bottom: 3px solid lighten($lightgrey, 15%);
}

.form-control {
  box-shadow: none;
}
</style>
