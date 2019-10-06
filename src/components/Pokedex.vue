<template>
  <b-container fluid>
    <div id="pokedex-container">
      <b-row>
        <b-col>
          <InformationPanel />
        </b-col>
        <b-col>
          <SearchPanel />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import InformationPanel from "./InformationPanel";
import SearchPanel from "./SearchPanel";

export default {
  name: "Pokedex",
  data() {
    return {};
  },
  components: {
    InformationPanel,
    SearchPanel
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/colours";

h2 {
  font-size: 14px;
  font-weight: bold;
  color: $white;
}

h4 {
  font-size: 14px;
  font-weight: bold;
}

@media only screen and (max-width: 810px) {
  .pokemon-evol-sprite-container {
    float: none;
  }

  #pokemon-info-panel {
    margin: 0 0 15px 0;
  }
}
</style>
