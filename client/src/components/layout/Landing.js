import React from 'react';
// import GoogleAuth from '../auth/GoogleAuth';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const Landing = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <Login />
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://st4.depositphotos.com/4678277/28802/i/1600/depositphotos_288020418-stock-photo-close-up-side-profile-photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
