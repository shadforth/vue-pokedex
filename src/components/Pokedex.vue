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
          <information-panel/>
        </b-col>
        <b-col>
          <search-panel/>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

// JavaScript
// ============================================================================
<script>
import InformationPanel from "./InformationPanel";
import SearchPanel from "./SearchPanel";

export default {
  name: "Pokedex",
  data () {
    return {
      title: "Pokédex"
    }
  },
  components: {
    "information-panel": InformationPanel,
    "search-panel": SearchPanel,
  }
}
</script>

// CSS
// ============================================================================
<style lang="scss" scoped>
$maincolor: #D93E39;

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
