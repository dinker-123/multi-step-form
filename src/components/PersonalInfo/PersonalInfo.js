import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../media/image.webp';

const PersonalInfo = ({ data, handleChange, errors, validate }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (validate(1)) {
      localStorage.setItem('formData', JSON.stringify(data));
      navigate('/AddressInfo');
    }
  };

  return (
    <div>
      <img src={logo} alt='' />
      <h2>Personal Information</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={data.phone} onChange={handleChange} />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
