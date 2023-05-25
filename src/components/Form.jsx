import React, { useState } from "react";
import { useForm, FormProvider } from 'react-hook-form';

const Form = () => {
  const methods = useForm()
  const [status, setStatus] = useState("Submit");
  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, source } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      source: source.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitForm} noValidate>
        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="name">
          Name:
        </label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" type="text" id="name" name="name"></input>
        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="email">Email:</label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" type="email" id="email" name="email"></input>
        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="source">How did you hear about us?</label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" type="text" id="source" name="source"></input>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-grey-500 font-bold py-2 my-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          {status}
        </button>
      </form>
    </FormProvider>
  )
}

export default Form;