import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 0",
    "& > *": {
      margin: theme.spacing(1)
      // width: "100%",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
      // width: 200,
    }
  }
}));
const DatePicker = props => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker className={classes.root} {...props} />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

DatePicker.defaultProps = {
  margin: "normal",
  id: "date-picker-dialog",
  label: "Select date",
  format: "MM/dd/yyyy",
  KeyboardButtonProps: {
    "aria-label": "change date"
  }
};

export default DatePicker;
