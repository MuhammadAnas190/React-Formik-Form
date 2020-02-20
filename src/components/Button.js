import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonWrapper = props => {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}/>
  );
}
export default ButtonWrapper;