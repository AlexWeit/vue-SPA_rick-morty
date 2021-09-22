<template>
  <div class="home">
    Rick And Morty
    <character-block @initialized="handler"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterBlock from "@/components/CharacterBlock";

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock
  },
  created() {
    this.$store.dispatch('fetchCharacters', 1);
  }
}
</script>
