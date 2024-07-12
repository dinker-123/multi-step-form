import React from 'react';
import './StepProgressBar.css';

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-container">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="circle">1</div>
        <div className="label">Personal Info</div>
      </div>
      <div className={`line ${currentStep >= 2 ? 'active' : ''}`}></div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="circle">2</div>
        <div className="label">Address Info</div>
      </div>
      <div className={`line ${currentStep >= 3 ? 'active' : ''}`}></div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="circle">3</div>
        <div className="label">Confirmation</div>
      </div>
    </div>
  );
};

export default StepProgressBar;
