import axios from "axios";
import { ref } from "vue";
import env from "../env";

const getMusicAndArtist = () => {
  const search = ref("");
  const numResults = ref(5);
  const offSet = ref(0);
  const musics = ref([]);
  const error = ref(null);

  const searchMusic = async () => {
    if (search.value !== "") {
      const options = {
        method: "GET",
        url: env.URL,
        params: {
          term: search.value,
          locale: "en-US",
          offset: `${offSet.value}`,
          limit: `${numResults.value}`,
        },
        headers: {
          "X-RapidAPI-Host": env.X_RAPIDAPI_HOST,
          "X-RapidAPI-Key": env.X_RAPIDAPI_KEY,
        },
      };

      axios
        .request(options)
        .then((res) => {
          musics.value = res.data.tracks.hits;
        })
        .catch((err) => {
          error.value = err.message;
          console.error(error);
        });
    }
  };

  return {
    musics,
    error,
    search,
    numResults,
    offSet,
    searchMusic,
  };
};

export default getMusicAndArtist;
