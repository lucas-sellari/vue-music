<template>
  <div class="music-table">
    <h2>Musics results</h2>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="musics" class="table-responsive">
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
          <tr v-for="music in musics" :key="music.track.key" class="column">
            <th>
              <img :src="music.track.share.image" alt="cover art" />
            </th>
            <td>{{ music.track.title }}</td>
            <td>{{ music.track.subtitle }}</td>
            <td><a :href="music.track.url" target="_blank">Shazam</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["musics", "error"],
};
</script>

<style lang="scss">
.music-table {
  margin: 20px;

  img {
    width: 80px;
  }
}
</style>