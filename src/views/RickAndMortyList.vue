<template>
  <div class="home">
    Rick And Morty
    <div class="characters-list">
      <character-block
              v-for="character in characters"
              :key="character.id"
              :character="character"
      />
    </div>
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
  data() {
    return {
      currentPage: 1,
    }
  },
  created() {
    this.$store.dispatch('fetchCharacters', this.currentPage);
  },
  computed: {
    characters() {
      return this.$store.getters['getCharacterByPage'](this.currentPage);
    },
    firstCharacter() {
      return this.$store.getters['getCharacterById']({id: 1, page: 1});
    }
  },
}
</script>
