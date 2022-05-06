<template>
  <form @submit.prevent="searchMusic">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="What are you looking for to listen?"
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

  <div class="music-table">
    <h2>Musics results</h2>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="musics">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="music in musics" :key="music.track.key">
            <th>
              <img
                :src="music.track.share.image"
                alt="cover art"
                class="cover-art"
              />
            </th>
            <td>{{ music.track.title }}</td>
            <td>{{ music.track.subtitle }}</td>
            <td><a :href="music.track.url">Shazam</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link">Previous</a></li>
    <li class="page-item"><a class="page-link">Next</a></li>
  </ul>
</nav>

  <div class="artist-table">
    <h2>Artists results</h2>

    <div v-if="artists">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artist in artists" :key="artist.artist.id">
            <th>
              <img
                :src="artist.artist.avatar"
                alt="avatar"
                class="avatar-artist"
              />
            </th>
            <td>{{ artist.artist.name }}</td>
            <td><a :href="artist.artist.weburl">Shazam profile</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import getMusicAndArtist from "../composables/getMusicAndArtist";

export default {
  name: "HomeView",
  setup() {
    const { musics, artists, error, search, numResults, searchMusic } =
      getMusicAndArtist();

    return {
      musics,
      artists,
      error,
      search,
      numResults,
      searchMusic,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/bootstrap";
</style>
