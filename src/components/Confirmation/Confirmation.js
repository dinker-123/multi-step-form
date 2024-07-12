import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/image.webp';

const Confirmation = ({ data, handleSubmit }) => {
  return (
    <div className='confirmation-Container'>
      <img src={logo} className="Logo" alt='' />   
      <h2 className='Headline'>Confirmation</h2>
      <p className='Detail'><b>Name: </b>{data.name}</p>
      <p className='Detail'><b>Email: </b> {data.email}</p>
      <p className='Detail'><b>Phone: </b>{data.phone}</p>
      <p className='Detail'><b>Address Line 1: </b>{data.address1}</p>
      <p className='Detail'><b>Address Line 2: </b>{data.address2}</p>
      <p className='Detail'><b>City: </b>{data.city}</p>
      <p className='Detail'><b>State: </b>{data.state}</p>
      <p className='Detail'><b>Zip Code: </b>{data.zip}</p>
      <Link to="/AddressInfo"><button>Back</button></Link>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
