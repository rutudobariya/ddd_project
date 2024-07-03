import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <nav className='p-3 bg-dark text-white'>
                <Row>
                    <div className='col-8 col-sm-9 col-md-10 col-lg-11'>
                        <h1>B<sub className='fs-3'>Shop</sub></h1>
                    </div>
                    <div className='col-4 col-sm-3 col-md-2 col-lg-1 d-flex justify-content-end align-items-center'>
                        <Button variant='outline-primary' className="rounded-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className='fa fa-bars text-white'></i></Button>
                    </div>
                </Row>
            </nav>

            {/* off-canvas start */}
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Deshbord</h5>
                    <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li><Link to="/" className='text-decoration-none text-black-50'>Home</Link></li>
                        <li><Link to="/add-book" className='text-decoration-none text-black-50'>Add Book</Link></li>
                        <li><Link to="/manage-book" className='text-decoration-none text-black-50'>Manage Book</Link></li>
                    </ul>
                    <Outlet />
                </div>
            </div>
            {/* off-canvas end*/}
        </>
    )
}
