import React from 'react'
import '../styles/ManageCountry.css'
import HeaderInput from '../components/HeaderInput.jsx'
import FormInputs from '../components/FormInputs.jsx';

const ManageCountry = () => {

  return (
    <main className="manageCountry">
      <h1>Manage Country</h1>
      <HeaderInput setType={"DB"}/>
      <FormInputs typeRender={"manage"}/>
    </main>
  )
}

export default ManageCountry