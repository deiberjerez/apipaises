import { toast } from "react-toastify";



function useUpdateCountryDB() {
  function handleUpdateCountry(country, newCountry) {
    fetch(`https://server-express-one.vercel.app/countries/country/${country.code}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCountry),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Country updated successfully");
        } else {
          toast.error("Country could not be updated");
        }
      })
      .catch((error) => console.error(error));
  }

  return { handleUpdateCountry };
}

export default useUpdateCountryDB;
