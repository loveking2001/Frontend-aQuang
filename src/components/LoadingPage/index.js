import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingPage = ({ isShow }) => {
  const style = { top: 0, zIndex: '9999', backgroundColor: '' };
  return isShow ? (
    <div
      style={style}
      className="position-fixed w-100 h-100 text-center d-flex justify-content-center align-items-center bg-cyan">
      <ClipLoader color="#36d7b7" size={100} />
    </div>
  ) : null;
};

export default LoadingPage;
