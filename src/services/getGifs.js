const apiKey = import.meta.env.VITE_API_KEY;

const limit = 20;

export default function getGifs({ keyword = "panda" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((res) => {
      const { data } = res;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { title, images, id } = image;
          const { url } = images.downsized_medium;
          return { title, url, id };
        });
        return gifs;
      }
    });
}
