import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));
const InputField = props => {
  const classes = useStyles();
  return (
    <TextField className={classes.root} {...props.attr}/>
  )
}

export default InputField;