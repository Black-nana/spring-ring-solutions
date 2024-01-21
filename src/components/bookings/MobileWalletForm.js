// MobileWalletForm.js
import React from 'react';
import { TextField, Grid } from '@mui/material';

const MobileWalletForm = ({ formik }) => {
  return (
    <>
      <TextField
        label="Mobile Number"
        name="mobileNumber"
        value={formik.values.mobileNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
      />
      <TextField
        label="Full Name"
        name="fullNameMobile"
        value={formik.values.fullNameMobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fullNameMobile && Boolean(formik.errors.fullNameMobile)}
        helperText={formik.touched.fullNameMobile && formik.errors.fullNameMobile}
      />
      <Grid item xs={12}>
        <button
          type="button"
          onClick={() => console.log("Mobile Wallet Payment Button Clicked", {
            mobileNumber: formik.values.mobileNumber,
            fullName: formik.values.fullName,
          })}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-150 my-2"
        >
          Pay Now
        </button>
      </Grid>
    </>
  );
};

export default MobileWalletForm;
