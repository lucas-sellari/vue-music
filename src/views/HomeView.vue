<template>
  <form @submit.prevent="searchMusic" class="form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="What song are you looking for?"
        v-model="search"
      />
      <label for="number-results"
        >How many results per page? The maximum is 5.</label
      >
      <input
        type="number"
        class="form-control"
        id="number-results"
        placeholder="Up to 5 results"
        v-model="numResults"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  <MusicTable :musics="musics" :error="error" />

  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="previous">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" @click="next">Next</a></li>
    </ul>
  </nav>
</template>

<script>
import getMusicAndArtist from "../composables/getMusicAndArtist";
import MusicTable from "../components/MusicTable.vue";

export default {
  name: "HomeView",
  components: {
    MusicTable,
  },
  setup() {
    const { musics, error, search, numResults, offSet, searchMusic } =
      getMusicAndArtist();

    const next = () => {
      offSet.value = offSet.value + numResults.value;
      searchMusic();
    };

    const previous = () => {
      offSet.value = offSet.value - numResults.value;
      searchMusic();
    };

    return {
      musics,
      error,
      search,
      numResults,
      next,
      previous,
      searchMusic,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/bootstrap";

.form {
  margin: 20px;

  label {
    margin-top: 15px;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
}

.pagination {
  margin: 20px;
}
</style>
