// UserSection.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userData from '../../data'; // Import local data mockup

const UserSection = ({ onUserLogin, onUserLogout,user }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Please enter a password'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;

      // Basic validation
      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }

      // Mockup data comparison
      const user = userData.find(
        (userData) => userData.first_name === username && userData.email === password
      );

      if (user) {
        onUserLogin(user);
        setShowModal(false);
        setError('');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    },
  });

  const handleSignOut = () => {
    onUserLogout();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setError('');
    formik.resetForm();
  };

  return (
    <div className='flex items-center gap-6'>
      {user ? (
        <>
          <span className='text-gray-700 '>{user.first_name}</span>
          <button onClick={handleSignOut} className='text-gray-700 border-b-2 border-orange-300 cursor-pointer'>
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={openModal} className='text-gray-700 border-b-2 border-orange-300 cursor-pointer'>
          Login
        </button>
      )}

      {/* Modal for Sign In */}
      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded-lg z-50'>
            <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
            <form onSubmit={formik.handleSubmit}>
              {/* Your form inputs for Sign In */}
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <p className='text-red-500 mt-1'>{formik.errors.username}</p>
              )}
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className='text-red-500 mt-1'>{formik.errors.password}</p>
              )}
              <button type='submit'>Sign In</button>
              {error && <p className='text-red-500 mt-2'>{error}</p>}
            </form>
            <button onClick={closeModal} className='mt-4'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSection;
