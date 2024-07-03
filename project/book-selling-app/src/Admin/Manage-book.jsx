import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../Customer/Layout';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Customer/Footer';

export default function Managebook() {

    const [data, setData] = useState([]);
    const Navigate = useNavigate('');

    // GET DATA FROM API
    function getdata() {
        axios.get("http://localhost:1200/books")
            .then((res) => setData(res.data));
    }

    useEffect(() => {
        getdata();
    }, []);


    //DELET DATA FROM API
    const Deletbook = (id) => {
        axios.delete(`http://localhost:1200/books/${id}`)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Book',
                    text: 'Delet Successfuly',
                })
                Window.location ="/manage-book";
            })
    }

    return (
        <div>
            <Layout/>
            <Container fluid="true" className='managebook p-3 px-0 p-sm-5 p-md-5 p-lg-5'>
                <div className='addbook-head' align="center">
                    <h1>Manage Books</h1>
                    <hr className='w-25 border-3 border-primary-subtle rounded-pill' />
                </div>
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Book Name</th>
                                <th>Authore Name</th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.author}</td>
                                        <td>{item.price}</td>
                                        <td><img src={item.photo} alt='book image' style={{ width: "50px", height: "60px" }} className='img-fluid' /></td>
                                        <td>
                                            <i className='fa fa-pencil text-primary fs-5' onClick={() => Navigate(`/update-book/${item.id}`)}></i>
                                            <span className='fw-bold'> || </span>
                                            <i className='fa fa-trash text-danger fs-5' onClick={() => Deletbook(item.id)}></i>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </Container>
            <Footer />
        </div>
    )
}
