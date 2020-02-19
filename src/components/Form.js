import React from "react";
import propTypes from "prop-types"
import { Formik } from 'formik';

// https://jaredpalmer.com/formik/docs/api/formik
const RootForm = props => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.schema}
      onSubmit={props.onSubmith}
      {...props.attr}
    >
    {props.control}
    </Formik>
  )
}
RootForm.propTypes = {
  initialValues: propTypes.object,
  validationSchema: propTypes.func,
  onSubmit: propTypes.func,
  control: propTypes.func
}
export default RootForm;