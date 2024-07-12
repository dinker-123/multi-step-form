import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import AddressInfo from './components/AddressInfo/AddressInfo';
import Confirmation from './components/Confirmation/Confirmation';
import StepProgressBar from './components/StepProgressBar/StepProgressBar';

const App = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const getCurrentStep = () => {
    switch (location.pathname) {
      case '/':
        return 1;
      case '/AddressInfo':
        return 2;
      case '/Confirmation':
        return 3;
      default:
        return 1;
    }
  };

  const [currentStep, setCurrentStep] = useState(getCurrentStep);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    setCurrentStep(getCurrentStep());
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const validate = (step) => {
    let tempErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!data.name) {
        tempErrors.name = 'Name is required';
        isValid = false;
      }
      if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        tempErrors.email = 'Valid email is required';
        isValid = false;
      }
      if (!data.phone || !/^\d{10}$/.test(data.phone)) {
        tempErrors.phone = 'Valid phone number is required';
        isValid = false;
      }
    } else if (step === 2) {
      if (!data.address1) {
        tempErrors.address1 = 'Address Line 1 is required';
        isValid = false;
      }
      if (!data.city) {
        tempErrors.city = 'City is required';
        isValid = false;
      }
      if (!data.state) {
        tempErrors.state = 'State is required';
        isValid = false;
      }
      if (!data.zip || !/^\d{6}$/.test(data.zip)) {
        tempErrors.zip = 'Valid zip code is required';
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(3)) {
      localStorage.setItem('formData', JSON.stringify(data));
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="container mt-5">
      <StepProgressBar currentStep={currentStep} />
      <Routes>
        <Route path="/" element={<PersonalInfo data={data} handleChange={handleChange} errors={errors} validate={validate} />} />
        <Route path="/AddressInfo" element={<AddressInfo data={data} handleChange={handleChange} errors={errors} validate={validate} />} />
        <Route path="/Confirmation" element={<Confirmation data={data} handleSubmit={handleSubmit} />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
