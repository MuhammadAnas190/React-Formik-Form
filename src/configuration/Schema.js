import * as Yup from "yup";
const d = new Date();
export const FormSchema = Yup.object().shape({
  medName: Yup.string()
    .matches(/^[a-z\s]+$/i, "Only alphabets are allowed")
    .required("Medication Name is Required"),
  prescribeName: Yup.string()
    .min(
      2,
      "Prescriber Name is Too Short! it must be between 2 to 50 characters"
    )
    .max(
      50,
      "Prescriber Name is Too Long! it must be between 2 to 50 characters"
    )
    .matches(/^[a-z\s]+$/i, "Only alphabets are allowed")
    .required("Prescriber Name is Required"),

  formType: Yup.string()
  .required("Please select a form"),
  methodType: Yup.string()
  .required("Please select a Method"),
  unitType: Yup.string()
  .required("Please select a Unit"),
  dossage: Yup.string()
  .matches(/^[0-9\s]+$/i, "Only numbers are allowed")
  .required("Medication Name is Required"),
  instruction: Yup.string()
  .required("Instruction is required"),
  sideEffect: Yup.string()
  .required("Instruction is required"),
  dontHaveWith: Yup.string()
  .required("Instruction is required"),
  startDate: Yup.date()
  .required("Start Date is required"),
  endDate: Yup.mixed()
  .oneOf([Yup.ref("startDate")], "Not match!"),

});
