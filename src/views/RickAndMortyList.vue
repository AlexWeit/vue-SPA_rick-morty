<template>
  <div class="home">
    Rick And Morty
    <character-block/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterBlock from "@/components/CharacterBlock";

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock
  }
}
</script>
