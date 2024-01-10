import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signin = ({ isOpen, onClose, onSignin }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?username=${values.username}&email=${values.password}`
        );

        if (response.data.length > 0) {
          const user = response.data[0];
          onSignin(user);
          onClose();
        } else {
          formik.setFieldError('password', 'Invalid username or password. Please try again.');
        }
      } catch (error) {
        formik.setFieldError('password', 'Error signing in. Please try again.');
      }
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
        }}
      >
        <Typography variant='h3' component='div' align='center' mb={2}>
          Sign In <LockIcon fontSize='large' className='text-slate-900' />
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid gap-2 w-full'>
            <TextField
              label='Username'
              variant='outlined'
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              mb={2}
            />

            <TextField
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              mb={2}
            />
            {formik.errors.password && formik.touched.password && (
              <Typography variant='body2' color='error' mb={2}>
                {formik.errors.password}
              </Typography>
            )}
            <Button type='submit' variant='contained' fullWidth>
              Sign In
            </Button>
          </div>
        </form>
        <div className='flex flex-col justify-center items-center mt-4' style={{ width: '100%' }}>
          <input
            type='button'
            value='Dont have an account? Sign up'
            className='text-slate-900 underline cursor-pointer'
          />
          <input
            type='button'
            value='Forgot Password?'
            className='text-slate-900 underline cursor-pointer'
          />
        </div>
      </Box>
    </Modal>
  );
};

export default Signin;
