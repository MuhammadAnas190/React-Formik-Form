import React from "react";
import propTypes from "prop-types"
import { Formik } from 'formik';

// https://jaredpalmer.com/formik/docs/api/formik

const RootForm = props => {
  const {onSubmit, schema, initialValues, ...attr} = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      {...attr}
    />
  )
}
RootForm.propTypes = {
  initialValues: propTypes.object.isRequired,
  validationSchema: propTypes.func,
  onSubmit: propTypes.func.isRequired,
  control: propTypes.func
}
export default RootForm;