import React, { useState } from "react";
import { useForm, FormProvider } from 'react-hook-form';

const Form = () => {
  const { methods, register, handleSubmit, watch, formState: { errors }} = useForm();
  const [status, setStatus] = useState("Submit");
  const submitForm = async (data, e) => {
    e.preventDefault();
    setStatus("Sending...");
    // const { name, email, source } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   source: source.value,
    // };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data) + "submitted");
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="name">
          Name:
        </label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3 
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" 
        type="text" id="name" name="name" {...register("name", { required: true })}></input>
        {errors.name?.type === 'required' && <p className="text-yellow-500 pt-2" role="alert">First name is required</p>}

        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="email">Email:</label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" 
        type="email" id="email" name="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}></input>
        {errors.email?.type === 'required' && <p className="text-yellow-500 pt-2" role="alert">Email is required</p>}
        {errors.email?.type === 'pattern' && <p className="text-yellow-500 pt-2" role="alert">Please enter valid email address</p>}

        <label className="block text-gray-100 text-md font-bold mb-2 my-3" htmlFor="source">How did you hear about us?</label>
        <input className="shadow appearance-none text-center border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline;" 
        type="text" id="source" name="source" {...register("source", { required: true })}></input>
        {errors.source?.type === 'required' && <p className="text-yellow-500 pt-2" role="alert">Please tell us how you found us</p>}

        <button className="bg-yellow-500 hover:bg-yellow-700 text-grey-500 font-bold py-2 my-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          {status}
        </button>
      </form>
    </FormProvider>
  )
}

export default Form;