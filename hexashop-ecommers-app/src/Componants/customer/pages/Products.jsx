import React, { Fragment, useState, useEffect } from 'react'
import Pagebanner from '../Pagebanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footre from '../Footre';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';


export default function Products() {

  const [products, setProducts] = useState([])
  const Navigate = useNavigate('');
  const { id } = useParams;

  useEffect(() => {
    axios.get('http://localhost:2602/AddProducts')
      .then((res) => {
        setProducts(res.data)
      })
  }, [])

  // FATCH CATEGORY
  const [category, setCategory] = useState([]);
  const [filtercategoy, setFilterCategory] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:2602/AddCategories')
      .then((res) => {
        setCategory(res.data)
      })
  }, [])

  // ADD DATA IN PRODUCT-DETAILS API
  const details = (data) => {
    axios.post("http://localhost:2602/Product-Details", data)
      .then(
        Navigate("/Product-Details")
      )
  }


  // ADD PRODUCT IN CART
  // const AddToCart = (data) => {
  //   axios.get("http://localhost:2602/Cart", data)
  //     .then(() => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Product',
  //         text: 'Added To Cart',
  //       })
  //     })
  // }


  return (
    <Fragment>
      {/* pagebanner */}
      <Pagebanner headline="Check Our Products" />

      <Container id='products' className='mb-5'>
        <Col className='product-head text-center py-3'>
          <h1>Our Products</h1>
          <p>"Being perfectly well-dressed gives one a tranquility that no religion can bestow."</p>
        </Col>

        <Col className='mb-4'>
          <Form>
            <select title="Select Category" className="form-control" onChange={(e) => setFilterCategory(e.target.value)}>
              <option>- Select Category -</option>
              {category && category.map((item) => {
                return (
                  <option value={item.categoryname}>{item.categoryname}</option>
                )
              })}
            </select>
          </Form>
        </Col>

        <Row>
          {products && products.map((item) => {
            return (
              (item.addcategoriename == filtercategoy ?
                <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' key={item.id}
                  data-aos="zoom-in-down" data-aos-duration="1000"
                >
                  <Col className='p-4 shadow position-relative detailsbox'>
                    <img src={item.productimg} alt='product-image' className='img-fluid mx-auto w-100' />
                    <h4 className='mt-2 name' >{item.productname}</h4>
                    <h5>Rs. <span className='text-success' >{item.productoffer}</span> <sub><del className='text-danger' >{item.productprice}</del></sub></h5>
                    <div className='detailsbutton position-absolute bottom-0'>
                      <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' onClick={() => Navigate(`/product-details/${item.id}`)}>Details</Button>
                    </div>
                  </Col>
                </Col>
                : "")
            )
          })}
        </Row>
      </Container>
      {/* footer */}
      <Footre />

    </Fragment>
  )
}
