import React, { Fragment } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';

export default function AdminManageOrders() {
  return (
    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          {/* sidebar */}
          <AdminSidebar />
        </Col>

        <Col className='admin-layout-right'>
          {/* header */}
          <AdminHeader />

          <Container fluid="true" id='admin-content'>
            {/* manage order */}
            <Container fluid="true"  id='manage-oeder'>
              <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Orders</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
            </Container>

            <Container>
              <Table className='w-75 mx-auto' >
                <thead align='center'>
                  <tr>
                    <th>PRODUCT IMAGE</th>
                    <th>ID</th>
                    <th>ORDER ID</th>
                    <th>PRODUCT PRICE</th>
                    <th>PRODUCT QTY</th>
                    <th>TOTAL PAY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody align='center'>
                  <tr>
                    <td><img src={"https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>10</td>
                    <td>US123</td>
                    <td>$120</td>
                    <td>1</td>
                    <td>$120</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td><img src={"https://www.universityoffashion.com/blog/wp-content/uploads/2021/07/A-look-from-Brionis-Spring-2022-Collection.-Photo-Credit-Brioni.-scaled.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>11</td>
                    <td>US456</td>
                    <td>$100</td>
                    <td>2</td>
                    <td>$200</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td><img src={"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=2000"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>12</td>
                    <td>US789</td>
                    <td>$120</td>
                    <td>1</td>
                    <td>$120</td>
                    <td>Deliver</td>
                  </tr>
                  <tr>
                    <td><img src={"https://media1.popsugar-assets.com/files/thumbor/UPEB-LvSoc7hr_gJkASisJ8m9ow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/19/829/n/1922564/e11061fd0ec3ed21_151989639/i/Youre-girl-all-your-friends-come-when-new-trend-pops-up.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>13</td>
                    <td>US101</td>
                    <td>$120</td>
                    <td>3</td>
                    <td>$360</td>
                    <td>Dispach</td>
                  </tr>
                  <tr>
                    <td><img src={"https://i.pinimg.com/736x/b5/d1/8c/b5d18c8da3a752a13160218bd3e942ed.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>14</td>
                    <td>US102</td>
                    <td>$90</td>
                    <td>5</td>
                    <td>$450</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td><img src={"https://images.kapsonsonline.com/kopl/images/GAS%20KIDS/410317150_0001/410317150_0001_1.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>15</td>
                    <td>US103</td>
                    <td>$70</td>
                    <td>2</td>
                    <td>$140</td>
                    <td>Out of delivery</td>
                  </tr>
                  <tr>
                    <td><img src={"https://images.squarespace-cdn.com/content/v1/559c4026e4b0b05c516049a2/1652107082005-75O9TI9SFX1E7C0ROCDA/DSC_3949.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>15</td>
                    <td>US104</td>
                    <td>$50</td>
                    <td>2</td>
                    <td>$100</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td><img src={"https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11638777094448.jpg"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>16</td>
                    <td>US105</td>
                    <td>$90</td>
                    <td>3</td>
                    <td>$270</td>
                    <td>Deliver</td>
                  </tr>
                  <tr>
                    <td><img src={"https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T87_3031V_E0_X_EC_0?wid=1024&qlt=80"} alt="" className='img-fluid' style={{ height: "100px" }} /></td>
                    <td>17</td>
                    <td>US106</td>
                    <td>$20</td>
                    <td>3</td>
                    <td>$60</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </Table>
            </Container>

            {/* footer */}
            <AdminFooter />
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
