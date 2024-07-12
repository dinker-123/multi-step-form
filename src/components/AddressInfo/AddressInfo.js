import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../media/image.webp';

const AddressInfo = ({ data, handleChange, errors, validate }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (validate(2)) {
      localStorage.setItem('formData', JSON.stringify(data));
      navigate('/Confirmation');
    }
  };

  return (
    <div>
      <img src={logo} alt='' />
      <h2>Address Information</h2>
      <div>
        <label>Address Line 1:</label>
        <input type="text" name="address1" value={data.address1} onChange={handleChange} />
        {errors.address1 && <span>{errors.address1}</span>}
      </div>
      <div>
        <label>Address Line 2:</label>
        <input type="text" name="address2" value={data.address2} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={data.city} onChange={handleChange} />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={data.state} onChange={handleChange} />
        {errors.state && <span>{errors.state}</span>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" name="zip" value={data.zip} onChange={handleChange} />
        {errors.zip && <span>{errors.zip}</span>}
      </div>
      <Link to="/"><button>Back</button></Link>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressInfo;
