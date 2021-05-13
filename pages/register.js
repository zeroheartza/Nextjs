import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function register() {
  function shoot() {
    alert("Insert Success");
  }
  function shoot_fail() {
    alert("Insert fail");
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (body) => {

    console.log(body);
    const res = await axios.post('http://localhost:8000/api/addUser', {

      name: body.name,
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

  console.log(watch("example")); 

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="http://localhost:3000/view">View</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="http://localhost:3000/register">register</a>
            <a class="nav-item nav-link active" href="http://localhost:3000/update">update</a>
            <a class="nav-item nav-link active" href="http://localhost:3000/delete">delete</a>

          </div>
        </div>
      </nav>
      <div class="container">
        <h2>Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="name">name:</label>
          <input type="name" placeholder="Enter name" class="form-control" {...register("name")} />

          <label for="email">Email:</label>
          <input type="email" placeholder="Enter email" class="form-control" {...register("email", { required: true })} />

          <label for="password">password:</label>
          <input type="password" placeholder="Enter password" class="form-control" {...register("password", { required: true })} />


          <button type="submit" class="btn btn-success">register</button>
        </form>
      </div>
    </div>
  );
}