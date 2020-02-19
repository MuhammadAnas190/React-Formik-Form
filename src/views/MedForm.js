import React, { useState, Fragment } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Select from "../components/Select";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";

const MedForm = props => {
  const d = new Date();
  const [medName, setMedName] = useState("");
  const [prescribeName, setPrescribeName] = useState("");
  const [formType, setFormType] = useState("");
  const [methodType, setMethodType] = useState("");
  const [unitType, setUnitType] = useState("");
  const [dossage, setDossage] = useState("100");
  const [instruction, setInstruction] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [dontHaveWith, setDontHaveWith] = useState("");
  const [startDate, setStartDate] = useState(d.getUTCDate());
  const [endDate, setEndDate] = useState("");

  return (
    <Fragment>
      <Form>
        
      </Form>
    </Fragment>
  )
};

export default MedForm;
