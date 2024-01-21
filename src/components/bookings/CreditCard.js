// CreditCard.js
import React from 'react';
import { TextField, Grid } from '@mui/material';

const CreditCard = ({ formik }) => {
  return (
    <>
      <TextField
        label="Card Number"
        name="cardNumber"
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
        helperText={formik.touched.cardNumber && formik.errors.cardNumber}
      />
      <TextField
        label="Expiry Date"
        name="expiryDate"
        value={formik.values.expiryDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
        helperText={formik.touched.expiryDate && formik.errors.expiryDate}
      />
      <TextField
        label="CVV"
        name="cvv"
        value={formik.values.cvv}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.cvv && Boolean(formik.errors.cvv)}
        helperText={formik.touched.cvv && formik.errors.cvv}
      />
      <Grid item xs={12}>
        <button
          type="button"
          onClick={() => console.log("Credit Card Payment Button Clicked", {
            cardNumber: formik.values.cardNumber,
            expiryDate: formik.values.expiryDate,
            cvv: formik.values.cvv,
          })}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-150 my-2"
        >
          Pay Now
        </button>
      </Grid>
    </>
  );
};

export default CreditCard;
