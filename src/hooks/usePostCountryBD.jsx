import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function usePostCountryBD() {
  const handlePostCountry = async (country) => {
    try {
      const response = await fetch(`https://server-express-one.vercel.app/countries/country/${country.code}`);
      if (response.ok) {
        const existingCountry = await response.json();
        toast.warn(`The country with code ${country.code} already exists in the database`);
      } else {
        fetch("https://server-express-one.vercel.app/countries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(country),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            toast.success("Successfully created country")
            console.log("Respuesta de la API:", data);
          })
          .catch((error) => {
            console.error("Error en la solicitud:", error);
          });
      }
    } catch (error) {
      alert("Error al verificar el país");
      console.error("Error en la solicitud:", error);
    }
  }

  return {
    handlePostCountry,
  };
}
