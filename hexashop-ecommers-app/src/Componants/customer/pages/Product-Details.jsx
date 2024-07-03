import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footre from '../Footre';
import Pagebanner from '../Pagebanner';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails() {

    const [productdata, setProductData] = useState([]);
    // const Navigate = useNavigate();
    // const { id } = useParams();
    // console.log(id, 'id', productdata)

    // const getproductdata = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:2602/AddProducts/${id}`);
    //         setProductData(response.data);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // };

    // useEffect(() => {
    //     getproductdata();
    // }, [])

    // if(!Object.keys(productdata.id).length > 0) return <div>Product Not Found</div>

    useEffect(() => {
        axios.get("http://localhost:2602/Product-Details")
            .then((response) => {
                setProductData(response.data)
            });
    }, []);


    // DELET DATA FROM API WHEN USER REDIRECT TO ANY PAGE
    // {
    //     if(window.location = "/cart"){
    //         return axios.delete("http://localhost:2602/Product-Details")
    //     }
    //     return axios.delete("http://localhost:2602/Product-Details")
    // }


    // ADD PRODUCT IN CART
    const AddToCart = (data) => {
        axios.post("http://localhost:2602/Cart", data)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Product',
                    text: 'Added To Cart',
                })
            })
    }


    return (
        <div>
            {/* pagebanner */}
            <Pagebanner headline="Product Details" />

            {/* product details section */}
            <Container id='product-details' className='p-5'>
                {productdata && productdata.map((product) => {
                    return (
                        <Row className='productdetails' key={product.id}>
                            <Col sm={6} md={6} lg={6} className="col-12 d-flex justify-content-center">
                                <img src={product.productimg} className='img-fluid' />
                            </Col>
                            <Col sm={6} md={6} lg={6} className="col-12 details-right">
                                <h1 className='mt-4 mt-md-0 mt-lg-0'>{product.productname}</h1>
                                <div className='mt-2'>
                                    <i className='fa fa-star text-warning fs-4'></i>
                                    <i className='fa fa-star text-warning fs-4 ms-1'></i>
                                    <i className='fa fa-star text-warning fs-4 ms-1'></i>
                                    <i className='fa fa-star text-warning fs-4 ms-1'></i>
                                    <i className='fa fa-star text-warning fs-4 ms-1'></i>
                                </div>
                                <div className='mt-2 d-flex'>
                                    <b className='me-4'>Size&nbsp;: </b>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioS" value="optionS" />
                                        <label className="form-check-label" htmlFor="inlineRadioS">S</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioM" value="optionM" />
                                        <label className="form-check-label" htmlFor="inlineRadioM">M</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioL" value="optionL" />
                                        <label className="form-check-label" htmlFor="inlineRadioL">L</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioXL" value="optionXL" />
                                        <label className="form-check-label" htmlFor="inlineRadioXL">XL</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioXXL" value="optionXXL" />
                                        <label className="form-check-label" htmlFor="inlineRadioXXL">XXL</label>
                                    </div>
                                </div>
                                <h3 className='mt-2'>Rs. {product.productoffer}</h3>

                                <p>{product.productdescriptions}</p>

                                <Button variant='outline-success' className='rounded-0' onClick={() => AddToCart(product)}>Add To Cart</Button>
                            </Col>
                        </Row>
                    )
                })}
            </Container>

            {/* footer */}
            <Footre />

        </div>
    )
}
