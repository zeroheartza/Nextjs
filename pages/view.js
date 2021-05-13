import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function View(props) {
    function shoot() {
        alert("Insert Success");
    }
    function shoot_fail() {
        alert("Insert fail");
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (body) => {

        console.log(body);
        const res = await axios.get('http://localhost:8000/api').then(function (res) {
            const data = res.data
            shoot()
            console.log(data);

        }).catch(function (error) {
            shoot_fail()
        });



    }

    console.log(watch("example")); // watch input value by passing the name of it

    const names = JSON.stringify(props.data)
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
                <h2>View</h2>
                <table class="table">
                {/* {JSON.stringify(props.data[1].id)} */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(name => (
                            <tr>
                                <td>{JSON.stringify(name.id)}</td>
                                <td>{JSON.stringify(name.name)}</td>
                                <td>{JSON.stringify(name.email)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>






    )
}

export async function getStaticProps() {




    const res = await axios.get('http://localhost:8000/api/read')
    const data = res.data

    console.log(data);



    return {
        props: {
            data: data
        },
    }




}