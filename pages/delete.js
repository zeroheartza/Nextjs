import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function Delete() {
    function shoot() {
        alert("Insert Success");
    }
    function shoot_fail() {
        alert("Insert fail");
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (body) => {
        body.id = parseInt(body.id)
        console.log(body);
        console.log(body.id);
        const res = await axios.delete(`http://localhost:8000/api/delete/${body.id}`).then(function (res) {
            const data = res
            
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
                <h2>Delete</h2>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <label for="email">id:</label>
                    <input type="number" placeholder="Enter id" class="form-control" {...register("id", { required: true })} />




                    <button type="submit" class="btn btn-success">Delete</button>
                </form>
            </div>
        </div>
    );
}