<!--
===============================================================================
Pokemon.vue
Parent container holding information and search panels.

Last modified by: Jacqui Shadforth <jacqueline.shadforth@gmail.com>
Date last modified: 26/10/2018
===============================================================================
-->

// HTML
// ============================================================================
<template>
  <b-container fluid>
    <div id="pokedex-container">
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
import InformationPanel from './InformationPanel'
import SearchPanel from './SearchPanel'

export default {
  name: 'Pokedex',
  data () {
    return { }
  },
  components: {
    InformationPanel,
    SearchPanel,
  }
}
</script>

// CSS
// ============================================================================
<style lang="scss" scoped>
@import '../assets/css/colours';

/* Fonts */
h2 {
  font-size: 14px;
  font-weight: bold;
  color: $white;
}

h4 {
  font-size: 14px;
  font-weight: bold;
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
