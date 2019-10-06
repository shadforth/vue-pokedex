<template>
  <div id="base-stats-container">
    <table class="table responsive">
      <tr>
        <td><strong>Height</strong><br />{{ pokemon.height.maximum }}</td>
        <td><strong>Weight</strong><br />{{ pokemon.weight.maximum }}</td>
        <td>
          <strong>Type</strong><br /><span v-if="pokemon.types">{{
            pokemon.types.join("/")
          }}</span>
        </td>
        <td>
          <strong>Generation</strong><br /><span
            v-if="pokemon.generation"
            >{{ pokemon.generation.split(" ")[1] }}</span
          >
        </td>
      </tr>
      <tr>
        <td><strong>Max HP</strong><br />{{ pokemon.max_hp }}</td>
        <td><strong>Max CP</strong><br />{{ pokemon.max_cp }}</td>
        <td><strong>Attack</strong><br />{{ pokemon.base_attack }}</td>
        <td><strong>Defense</strong><br />{{ pokemon.base_defense }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BaseStatistics",
  props: {
    pokemon: {
      type: Object
    }
  }
};
</script>
