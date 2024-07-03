import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import axios from 'axios';
import Footer from './Footer';


export default function Home() {

    // DISPALY BOOKs FROM API
    const [data, setData] = useState([0]);
    useEffect(() => {
        axios.get("http://localhost:1200/books")
            .then((res) => {
                setData(res.data)
            })
    }, []);

    return (
        <Fragment>
            <Layout />
            <Container className="pb-5">
            <div className='my-4'>
                <h1 className='text-center'>Famous Books</h1>
                <hr className='w-25 mx-auto border border-3 border-black rounded-pill' />
            </div>
                <Row className='row'>
                    <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5'>
                        <div className='card-header' align="center">
                            <img src="https://m.media-amazon.com/images/I/81jj54IP54L._AC_UY218_.jpg" alt="Bhagvat Gita" className='img-fluid mx-auto' />
                        </div>
                        <div className='card-body'>
                            <h4>Bhagvat Gita</h4>
                            <h6>Author : Vyasa</h6>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-item-center'>
                            <h5 className='mt-1'>&#8377; 209</h5>
                            <Button className="btn-dark" href="https://en.wikipedia.org/wiki/Bhagavad_Gita" target='_blank'>View More</Button>
                        </div>
                    </Card>
                    <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5'>
                        <div className='card-header' align="center">
                            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7z3I8-XoqiBLZamIGBAV3wcbGWrX_LMkNLIzK6cibiM4ATsBJ' alt="Wings of Fire" className='img-fluid mx-auto' />
                        </div>
                        <div className='card-body'>
                            <h4>Wings of Fire</h4>
                            <h6>Author : Dr. A P J Abdul kalam</h6>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-item-center'>
                            <h5 className='mt-1'>&#8377; 255</h5>
                            <Button className="btn-dark" href="https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)" target='_blank'>View More</Button>
                        </div>
                    </Card>
                    <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5'>
                        <div className='card-header' align="center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYi_tSanmuSW-Qhd6tAxQy96ieJD8BpmA8rT3wO9wF6M_eamI" alt="The White Tiger" className='img-fluid mx-auto' />
                        </div>
                        <div className='card-body'>
                            <h4>The White Tiger</h4>
                            <h6>Author : Aravind Adiga</h6>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-item-center'>
                            <h5 className='mt-1'>&#8377; 291</h5>
                            <Button className="btn-dark" href='https://en.wikipedia.org/wiki/The_White_Tiger_(2021_film)' target='_blank'>View More</Button>
                        </div>
                    </Card>
                    {data &&
                        data.map((books) => {
                            return (
                                <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5' key={books.id}>
                                    <div className='card-header' align="center">
                                        <img src={books.photo} alt={books.name} className='img-fluid mx-auto' />
                                    </div>
                                    <div className='card-body'>
                                        <h4>{books.name}</h4>
                                        <h6>Author : {books.author}</h6>
                                    </div>
                                    <div className='card-footer d-flex justify-content-between align-item-center'>
                                        <h5 className='mt-1'>&#8377; {books.price}</h5>
                                        <Button className="btn-dark" href={books.link} target='_blank'>View More</Button>
                                    </div>
                                </Card>
                            )
                        })}
                </Row>
            </Container>
            <Footer />
        </Fragment>
    );
}


