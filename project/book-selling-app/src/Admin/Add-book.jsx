import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import Layout from '../Customer/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from '../Customer/Footer';

export default function Addbook() {

    const name = useRef('');
    const author = useRef('');
    const price = useRef('');
    const photo = useRef('');
    const Navigate = useNavigate('');

    const AddNewBook = () => {
        const insert = {
            name: name.current.value,
            author: author.current.value,
            price: price.current.value,
            photo: photo.current.value,
        }

        axios.post("http://localhost:1200/books", insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Book',
                    text: 'Added Successfuly',
                })
            })
        Navigate("/manage-book")
    }

    return (
        <div>
            <Layout />
            <Container className='p-5'>
                <form>
                    <div className='addbook-head' align="center">
                        <h1>Add New Book</h1>
                        <hr className='w-25 border-3 border-primary-subtle rounded-pill' />
                    </div>
                    <div className="form-floating mt-3 mt-sm-4 mt-md-5 mt-lg-5">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Book Name" autoComplete='false'
                            ref={name}
                        />
                        <label>Book Name</label>
                    </div>

                    <div className="form-floating mt-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Book Author Name" autoComplete='false'
                            ref={author}
                        />
                        <label>Book Author Name</label>
                    </div>

                    <div className="form-floating mt-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Book Price" autoComplete='false'
                            ref={price}
                        />
                        <label>Book Price</label>
                    </div>

                    <div className="form-floating mt-3">
                        <input type="url" className="form-control" id="floatingInput" placeholder="Book URL" autoComplete='false'
                            ref={photo}
                        />
                        <label>Book Image URL</label>
                    </div>

                    <div className="form-floating mt-3">
                        <Button variant='outline-info' className='w-100' onClick={AddNewBook}>Add Book</Button>
                    </div>
                </form>
            </Container>
            <Footer />
        </div>
    )
}
