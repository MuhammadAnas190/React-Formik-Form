import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 0",
    '& > *': {
      margin: theme.spacing(1),
      // width: "100%",
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
}));
const InputField = props => {
  const classes = useStyles();
  return (
    <TextField className={classes.root} {...props}/>
  )
}

export default InputField;