import React from "react";
import "../styles/CreateCountry.css";
import HeaderInput from './../components/HeaderInput.jsx';
import FormInputs from "../components/FormInputs.jsx";

const CreateCountry = () => {

  return (
    <main className="createCountry">
      <h1>Create Country</h1>
      <HeaderInput setType={"API"}/>
      <FormInputs typeRender={"create"}/>
    </main>
  );
};

export default CreateCountry;
