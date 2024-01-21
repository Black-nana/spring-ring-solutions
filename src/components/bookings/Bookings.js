// Booking.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
} from "@mui/material";
import useConfirm from "../customHooks/useConfirm";
import MobileWalletForm from "./MobileWalletForm";
import CreditCard from "./CreditCard";

const Booking = () => {

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      service: "",
      fullName: "",
      fullNameMobile: "",
      contact: "",
      address: "",
      subscribe: false,
      subscriptionFrequency: "",
      paymentMethod: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      mobileNumber: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      service: Yup.string().required("Required"),
      fullName: Yup.string().required("Required"),
      contact: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      subscribe: Yup.boolean(),
      subscriptionFrequency: Yup.string().when("subscribe", {
        is: true,
        then:()=> Yup.string().required("Subscription frequency is required"),
        otherwise:()=> Yup.string().notRequired(),
      }),
      paymentMethod: Yup.string().required("Payment method is required"),
      cardNumber: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then:()=> Yup.string()
          .required("Card number is required")
          .matches(/^[0-9]+$/, "Card number is not valid"),
        otherwise:()=> Yup.string().notRequired(),
      }),
      expiryDate: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then:()=> Yup.string().required("Expiry date is required"),
        otherwise:()=> Yup.string().notRequired(),
      }),
      cvv: Yup.string().when("paymentMethod", {
        is: "creditCard",
        then:()=> Yup.string()
          .required("CVV is required")
          .length(3, "CVV must be 3 digits"),
        otherwise:()=> Yup.string().notRequired(),
      }),
      mobileNumber: Yup.string().when("paymentMethod", {
        is: "mobileWallet",
        then:()=> Yup.string().required("Mobile number is required"),
        otherwise:()=> Yup.string().notRequired(),
      }),
      fullNameMobile: Yup.string().when("paymentMethod", {
        is: "mobileWallet",
        then:()=> Yup.string().required("Full name is required"),
        otherwise:()=> Yup.string().required("Full name is required"),
      }),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
      
    },
  });
  const handleSubmitWithConfirmation = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const isConfirmed = await confirm(); // Show confirmation dialog and wait for user response
    if (isConfirmed) {
      formik.submitForm(); // If confirmed, proceed with form submission
    }
  };
  const [ConfirmationDialog, confirm] = useConfirm(
    "Confirm Booking",
    "Are you sure you want to book this appointment?",
    formik.values
  )
  console.log(formik.errors);

  return (
    <Container className="my-10">
      <Typography
        variant="h4"
        gutterBottom
        className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white px-4 py-2 w-fit rounded-lg"
      >
        Book an Appointment
      </Typography>

      <form onSubmit={handleSubmitWithConfirmation}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              name="date"
              fullWidth
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // Add this to track field has been touched
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              name="time"
              fullWidth
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // Add this to track field has been touched
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="select service"
              name="service"
              fullWidth
              select
              value={formik.values.service}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.service && Boolean(formik.errors.service)}
              helperText={formik.touched.service && formik.errors.service}
            >
              <MenuItem value="cleaningService">Cleaning Service</MenuItem>
              <MenuItem value="maintenance">Maintenance</MenuItem>
              {/* Add more service options as needed */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact"
              name="contact"
              fullWidth
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="subscribe"
                  checked={formik.values.subscribe}
                  onChange={formik.handleChange}
                />
              }
              label="Subscribe to Service"
            />
            <Grid>
              {formik.values.subscribe && (
                <Select
                  name="subscriptionFrequency"
                  fullWidth
                  value={formik.values.subscriptionFrequency}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subscriptionFrequency &&
                    Boolean(formik.errors.subscriptionFrequency)
                  }
                  displayEmpty // This will allow the disabled MenuItem to show
                >
                  <MenuItem value="" disabled>
                    Select Frequency
                  </MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="annually">Annually</MenuItem>
                </Select>
              )}
              {formik.values.subscribe &&
                formik.touched.subscriptionFrequency && (
                  <Typography color="error" variant="caption">
                    {formik.errors.subscriptionFrequency}
                  </Typography>
                )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="paymentMethod"
                  value="creditCard"
                  checked={formik.values.paymentMethod === "creditCard"}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "paymentMethod",
                      e.target.checked ? "creditCard" : ""
                    )
                  }
                />
              }
              label="Credit Card"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="paymentMethod"
                  value="mobileWallet"
                  checked={formik.values.paymentMethod === "mobileWallet"}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "paymentMethod",
                      e.target.checked ? "mobileWallet" : ""
                    )
                  }
                />
              }
              label="Mobile Wallet"
            />
            <Grid>
              {formik.values.paymentMethod === "creditCard" && (
                <CreditCard formik={formik} />
              )}
              {formik.values.paymentMethod === "mobileWallet" && (
                <MobileWalletForm formik={formik} />
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit">Book now</Button>
          </Grid>
        </Grid>
      </form>
      <ConfirmationDialog/>
    </Container>
  );
};

export default Booking;
