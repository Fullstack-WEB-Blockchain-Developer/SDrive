import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';
import MenuLink from '../components/menuLink';
import DatePicker from "react-horizontal-datepicker";

const FormsNavPage = () => {
  const selectedDay = (val) =>{
    console.log(val)
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='9' className='mt-3 mx-auto'>
        </MDBCol>
        <MDBCol md='3' className='mt-3 mx-auto'>
          <DatePicker getSelectedDay={selectedDay}
                      endDate={100}
                      selectDay={new Date('2020-04-30')}
                      labelFormat={'MMMM'}
                      color={'#374e8c'} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormsNavPage;
