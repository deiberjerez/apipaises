import { toast } from 'react-toastify';

export function useDeleteCountryDB() {
  function handleDeleteCountry(country) {
    fetch(`https://server-express-one.vercel.app/countries/country/${country.code}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success(`The country has been eliminated`);
        } else {
          toast.error(`The country could not be eliminated`);
        }
      })
      .catch((error) => console.error(error));
  }

  return { handleDeleteCountry };
}
