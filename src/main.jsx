import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./styles/index.css";
import { ProviderGetCountriesDB } from "./context/ContextGetCountriesDB.jsx";
import { ProviderGetCountryAPI } from "./context/ContextGetCountryAPI.jsx";
import { ProviderRenderCountryInfo } from "./context/ContextRenderCountryInfo.jsx";
import { ProviderGetCountryDB } from "./context/ContextGetCountryDB.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderGetCountryAPI>
      <ProviderGetCountriesDB>
        <ProviderGetCountryDB>
          <ProviderRenderCountryInfo>
            <App />
          </ProviderRenderCountryInfo>
        </ProviderGetCountryDB>
      </ProviderGetCountriesDB>
    </ProviderGetCountryAPI>
  </React.StrictMode>
);
