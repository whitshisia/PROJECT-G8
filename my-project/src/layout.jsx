import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import heroImage from '../src/assets/library.jpg'; 

const NavBar = () => {
  return (
    <nav className="bg-blue-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Learning</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </div>
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center min-h-screen pt-16 bg-white">
        <div className="max-w-screen-xl bg-blue-300 p-8 rounded shadow-md flex flex-wrap justify-between items-center w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">LIBRARY MANAGEMENT SYSTEM</h1>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Get Started
            </button>
          </div>
          <img src={heroImage} alt="Library Management" className="max-w-md" />
        </div>
      </section>
      <div>
        <Outlet />
      </div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-green-500 text-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="max-w-screen-xl w-full mx-auto text-center md:text-left">
          &copy; 2024 E-Library. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Layout;
