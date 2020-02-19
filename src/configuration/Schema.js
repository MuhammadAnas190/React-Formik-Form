import * as Yup from "yup";

export const signUpShema = Yup.object().shape({
  medName: Yup.string()
  .matches(/^[a-z\s]+$/i, "Only alphabets are allowed")
  .required("Medication Name is Required"),
  prescribeName: Yup.string()
  .min(2, "Prescriber Name is Too Short! it must be between 2 to 50 characters")
  .max(50, "Prescriber Name is Too Long! it must be between 2 to 50 characters")
  .matches(/^[a-z\s]+$/i, "Only alphabets are allowed")
  .required("Prescriber Name is Required"),
  
  password: Yup.string()
    .min(8, "Password is Too Short! it must be between 8 and 16 characters")
    .max(16, "Password is Too Long! it must be between 8 and 16 characters")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9\W\S]{8,16}$/, 'Must contain one uppercase and one lowercase.')
    .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/, 'Must contain one uppercase, one lowercase and one number.')
    .required("Password Required"),

  confirmPassword: Yup.mixed().oneOf(
    [Yup.ref('password')], 'Password do not match!'
    )
    .required("Confirm Password Required"),
})