// ConfirmationPage.js

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const ConfirmationPage = ({ bookingData, mobileWalletData }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Booking Confirmation
      </Typography>

      {/* Display Booking Details */}
      <Typography variant="h5" gutterBottom>
        Appointment Details
      </Typography>
      <Typography>
        Date: {bookingData.date} | Time: {bookingData.time}
      </Typography>
      <Typography>
        Service: {bookingData.service} | Subscription: {bookingData.selectedSubscription}
      </Typography>
      <Typography>
        User: {bookingData.userName} | Contact: {bookingData.contactNumber}
      </Typography>
      <Typography>
        Address: {bookingData.address}
      </Typography>

      {/* Display Mobile Wallet Details if available */}
      {mobileWalletData && (
        <>
          <Typography variant="h5" gutterBottom>
            Mobile Wallet Payment Details
          </Typography>
          <Typography>
            Full Name: {mobileWalletData.fullName}
          </Typography>
          <Typography>
            Mobile Number: {mobileWalletData.mobileNumber}
          </Typography>
        </>
      )}

      {/* Confirmation Message */}
      <Typography variant="h5" gutterBottom>
        Thank you for booking with us!
      </Typography>
      <Typography>
        Your appointment has been confirmed. We look forward to serving you.
      </Typography>

      {/* Add any additional information or CTAs as needed */}
      <Button variant="contained" color="primary">
        Back to Home
      </Button>
    </Container>
  );
};

export default ConfirmationPage;
