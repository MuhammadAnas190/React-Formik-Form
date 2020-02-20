import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

const InputField = props => {
  const classes = useStyles();
  const {selectAttr, opt} = props; 
  return (
    <Fragment>
      <InputLabel className={classes.root} id={selectAttr.id}>
        {selectAttr.name}
      </InputLabel>
      <Select className={classes.root} {...selectAttr}>
        {opt.map(val => (
          <MenuItem key={val.id} value={val.value} {...val.itemAttr}>
            {val.text}
          </MenuItem>
        ))}
      </Select>
    </Fragment>
  );
};

InputField.propTypes = {
  selectAttr: propTypes.objectOf(propTypes.string),
  opt: propTypes.array,
}

export default InputField;
