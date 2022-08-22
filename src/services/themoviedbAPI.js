import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'd753c7c06260672f2cde39e68c02f927';

export const themoviedbAPI = {
  async fetchTrending() {
    const moviesData = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return moviesData;
  },
  async fetchByQuery(query) {
    const moviesData = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}`
    );
    return moviesData;
  },
  async fetchById(id) {
    const moviesData = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return moviesData;
  },
  async fetchCastById(id) {
    const moviesData = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}`
    );
    return moviesData;
  },
  async fetchReviewsById(id) {
    const moviesData = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return moviesData;
  },
};
