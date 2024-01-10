// UserSection.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Dialog, DialogActions, DialogContent,  TextField, Typography } from '@mui/material';
import { RiLockPasswordFill } from "react-icons/ri";
import userData from '../../data'; // Import local data mockup

const UserSection = ({ onUserLogin, onUserLogout, user }) => {
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
      const foundUser = userData.find(
        (userData) => userData.first_name === username && userData.email === password
      );

      if (foundUser) {
        onUserLogin(foundUser);
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
          <Typography variant="body1" className='text-gray-700 '>
            {user.first_name}
          </Typography>
          <Button onClick={handleSignOut} className='text-gray-700 border-b-2 border-orange-300'>
            Sign Out
          </Button>
        </>
      ) : (
        <Button onClick={openModal} className='text-gray-700 border-b-2 border-orange-300'>
          Login
        </Button>
      )}

      {/* Modal for Sign In */}
      <Dialog open={showModal} onClose={closeModal}  sx={{ '& .MuiDialog-paper': { width: '400px' } }}>
        <div className='m-0 px-4 py-4 text-3xl font-semibold flex items-center gap-2'>SignIn
        <RiLockPasswordFill className='text-blue-700 text-4xl'/>
        </div>
        <DialogContent>
          <form onSubmit={formik.handleSubmit} className='grid place-items-center mt-0'>
            {/* Your form inputs for Sign In */}
            <TextField
              label='Username'
              type='text'
              id='username'
              name='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='standard'
              fullWidth
              margin='normal'
            />
            {formik.touched.username && formik.errors.username && (
              <Typography variant='body2' color='error'>
                {formik.errors.username}
              </Typography>
            )}
            <TextField
              label='Password'
              type='password'
              id='password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant='standard'
              fullWidth
              margin='normal'
            />
            {formik.touched.password && formik.errors.password && (
              <Typography variant='body2' color='error'>
                {formik.errors.password}
              </Typography>
            )}
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Sign In
            </Button>
            {error && (
              <Typography variant='body2' color='error' mt={2}>
                {error}
              </Typography>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color='secondary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserSection;
