import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Form from "../components/Form";
import { FormSchema } from "../configuration/Schema";
import Input from "../components/Input";
// import Select from "../components/Select";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";

const formtype = [
  {value: "Tablet",label: "Tablet"},
  {value: "Capsule",label: "Capsule"},
  {value: "Injectable",label: "Injectable"},
];
const methodtype = [
  {value: "Oral",label: "Oral"},
  {value: "Topical",label: "Topical"},
  {value: "Injection",label: "Injection"},
];
const unittype = [
  {value: "mg",label: "mg"},
  {value: "ml",label: "ml"},
  {value: "%",label: "%"},
];
const MedForm = props => {
  const [state, setState] = useState({
    medName: "",
    prescribeName: "",
    formType: "",
    methodType: "",
    unitType: "",
    dossage: "",
    instruction: "",
    sideEffect: "",
    dontHaveWith: "",
    startDate: null,
    endDate: null
  });
  const handleSubmit = (val, config) => {
    console.log("handle Submit val: ", val, config);
  };
  const handleChange = (e, name) => {
    if(name !== undefined) {
      setState({
        ...state,
        [name]: e
      })
    } else {
      const { target } = e;
      setState({
        ...state,
        [target.name]: target.value
      });  
    }
    console.log("State: ", state)
  };
  const handleBlur = (e) => {
    console.log("Blurr", e)
    return (e || { target: { name: e.target.name, value: "" }})
  }
  return (
    <Fragment>
      <Form
        initialValues={state}
        SchemaName={FormSchema}
        onSubmit={() => handleSubmit()}
      >
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Input
              label="Medical Name"
              value={state.medName}
              name="medName"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Prescribe Name"
              value={state.prescribeName}
              name="prescribeName"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              select
              id="selectForm"
              label="Select Form"
              value={state.formType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="formType"
              fullWidth
            >
              {formtype.map(val => (
                <option key={val.value} value={val.value}>
                {val.label}
              </option>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12}>
            <Input
              select
              id="methodType"
              label="Select Method"
              value={state.methodType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="methodType"
              fullWidth
            >
              {methodtype.map(val => (
                <option key={val.value} value={val.value}>
                {val.label}
              </option>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12}>
            <Input
              select
              id="unittype"
              label="Select Unit"
              value={state.unitType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="unitType"
              fullWidth
            >
              {unittype.map(val => (
                <option key={val.value} value={val.value}>
                {val.label}
              </option>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Dossage"
              value={state.dossage}
              name="dossage"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Instruction"
              value={state.instruction}
              name="instruction"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Side Effects"
              value={state.sideEffect}
              name="sideEffect"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Do Not Have With"
              value={state.dontHaveWith}
              name="dontHaveWith"
              onChange={handleChange}
              onBlur={handleBlur}
              type="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={state.startDate}
              onChange={(e) => handleChange(e, "startDate")}
              fullWidth
              KeyboardButtonProps={{
                'aria-label': 'Start Date',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={state.endDate}
              onChange={(e) => handleChange(e, "endDate")}
              fullWidth
              KeyboardButtonProps={{
                'aria-label': 'End Date',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </Form>
    </Fragment>
  );
};

export default MedForm;
