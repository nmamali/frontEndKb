import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import './testcard.css'
import weakness from '../pic/weakness.jpg';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md='3'>
      </MDBCol>

      <MDBCol md='6'>
        <MDBCard narrow>
          <MDBView cascade className="text-center">
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top size'
              src={weakness}
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
            <h3 className='pink-text'>
               Symptom: weakness
            </h3>
            <MDBCardText>
              <h5>On a scale of [0 to 10] how bad is the symptoms</h5>
            </MDBCardText>
            <MDBCardTitle className='font-weight-bold'>


              <div className="d-flex justify-content-center my-4">
                <span className="font-weight-bold purple-text mr-2 mt-1">0</span>

                <input type="range" className="custom-range red-text"  />

                <span className="font-weight-bold purple-text ml-2 mt-1">10</span>
              </div>



            </MDBCardTitle>

            {/*<MDBRow>*/}

            {/*<MDBCol md='2'>*/}
            {/*  <div className="btn-group" role="group" aria-label="Basic example">*/}
            {/*    <button type="button" className="btn btn-primary d-flex justify-content-right my-9">Previous</button>*/}
            {/*  </div>*/}
            {/*</MDBCol>*/}
            {/*<MDBCol md='1'>*/}

            {/*</MDBCol>*/}
            {/*<MDBCol md='9'>*/}
            {/*  <div className="btn-group" role="group" aria-label="Basic example">*/}
            {/*    <button type="button" className="btn btn-primary d-flex justify-content-right my-9">Next </button>*/}
            {/*  </div>*/}
            {/*</MDBCol>*/}
            {/*  </MDBRow>*/}

            <div className="d-flex justify-content-center my-4">
              <span className="font-weight-bold purple-text mr-2 mt-1">

                 <button type="button" className="btn btn-primary d-flex justify-content-right my-9 picture">Prev Symptoms </button>
              </span>
              <form className="range-field w-75">
              </form>
              <span className="font-weight-bold purple-text ml-2 mt-1">
                 <button  type="button" className="btn btn-primary d-flex justify-content-right my-9 picture">Next Symptoms </button>
              </span>
            </div>



            {/*<MDBBtn color='unique'>Button</MDBBtn>*/}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='3'>

      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;
