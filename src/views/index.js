import React, { Fragment } from "react";
import MedForm from "./MedForm"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`
  },
  container: {
    maxWidth: "800px"
  }
}));

const FormCard = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center" }}>Medical Form</h1>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <MedForm />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default FormCard;
