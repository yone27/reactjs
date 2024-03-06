const API_KEY = "5wU855kApgPebl5cH24lGnnTCFPdY0ez";

export default function getGifs({ keyword = "dont move" } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const newgifs = data.map((image) => {
        return {
          url: image.images.downsized_medium.url,
          title: image.title,
          id: image.id
        };
      });
      return newgifs;
    });
}
