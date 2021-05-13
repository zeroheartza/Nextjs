import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function login() {
  function shoot() {
    alert("Insert Success");
  }
  function shoot_fail() {
    alert("Insert fail");
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (body) => {

    console.log(body);
    const res = await axios.post('http://localhost:8000/api/login', {

 
      email: body.email,
      password: body.password

    }).then(function (res) {
      const data = res.data
      shoot()
      console.log(data);

    }).catch(function (error) {
      shoot_fail()
    });



  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (

    <div class="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>


        <label for="email">Email:</label>
        <input type="email" placeholder="Enter email" class="form-control" {...register("email", { required: true })} />

        <label for="password">password:</label>
        <input type="password" placeholder="Enter password" class="form-control" {...register("password", { required: true })} />


        <button type="submit" class="btn btn-success">Login</button>
      </form>
    </div>
  );
}