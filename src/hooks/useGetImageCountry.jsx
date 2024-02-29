import { useEffect, useState } from "react";

function useGetImageCountry(country) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
      const API_KEY = "41301808-e86fa23811faafdafbfc9238a";
      const countryName = country;
      const category = "places, city";
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${countryName}&image_type=photo&category=${category}`;

      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          if (data.totalHits > 0) {
            for (let i = 0; i < data.hits.length; i++) {
              const imageTags = data.hits[i].tags.toLowerCase();
              if (
                imageTags.includes("places") ||
                imageTags.includes("city") ||
                imageTags.includes("capital")
              ) {
                setImageUrl(data.hits[i].webformatURL);
                return;
              }
            }
            setImageUrl(data.hits[0].webformatURL);
          }
        })
        .catch((error) => console.error("Error fetching images:", error));
    }, [country]);

    return { imageUrl };
}

export default useGetImageCountry
