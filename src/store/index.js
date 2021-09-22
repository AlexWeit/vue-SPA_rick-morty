import { createStore } from 'vuex';
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";

export default createStore({
  state: {
    characters: {},
  },
  mutations: {
    setCharacters(state, {page, characters}) {
      state.characters[page] = characters;
    }
  },
  actions: {
    fetchCharacters(page) {
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
          .then(res => {
            console.log(res)
          })
          .catch(err => console.log(err));
    }
  },
  modules: {
  }
})
