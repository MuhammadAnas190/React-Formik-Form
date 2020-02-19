import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = props => {
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
          {...props.attr}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

DatePicker.defaultProps = {
  margin: "normal",
  id: "date-picker-dialog",
  label: "Select date",
  format: "MM/dd/yyyy",
  KeyboardButtonProps: {
    "aria-label": "change date"
  }
}