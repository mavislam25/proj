import React, { useState } from "react";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default {
  title: "InputFields/Molecules/PhoneNumberInput",
  component: PhoneNumberInput,
};

const useStyles = makeStyles(() => ({
  container: {
    width: 300,
  },
  wideContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    margin: "0 20px",
  },
}));

export const Default = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput value={value} onChange={onChange} />
    </div>
  );
};

export const DefaultWithInitialCountryCode = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput
        value={value}
        onChange={onChange}
        initialCountryCode="US"
      />
    </div>
  );
};

export const DefaultWithSingleCountryMatch = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+232 12345678");

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput value={value} onChange={onChange} />
    </div>
  );
};

export const DefaultWithMultipleCountryMatches = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+1 12345678");

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput value={value} onChange={onChange} />
    </div>
  );
};

export const DefaultWithError = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+12345678");

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput
        value={value}
        onChange={onChange}
        isValid={() => false}
        helperText={"Error shows"}
      />
    </div>
  );
};

export const DefaultDisabled = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+12345678");

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput value={value} onChange={onChange} disabled={true} />
    </div>
  );
};

export const DefaultRequired = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+12345678");

  const onChange = (newValue) => setValue(newValue);

  return (
    <div className={classes.container}>
      <PhoneNumberInput value={value} onChange={onChange} required={true} />
    </div>
  );
};

export const DefaultValuePropSwitching = () => {
  const classes = useStyles();
  const [value, setValue] = useState("+12345678");
  const [value2, setValue2] = useState("+2639876543");

  const onChange = (v) => setValue(v);
  const onChange2 = (v) => setValue2(v);

  return (
    <div className={classes.wideContainer}>
      <div className={classes.container}>
        <PhoneNumberInput value={value} onChange={onChange} />
      </div>
      <Button
        className={classes.button}
        onClick={() => {
          const tmp = value;
          setValue(value2);
          setValue2(tmp);
        }}
      >
        Switch
      </Button>
      <div className={classes.container}>
        <PhoneNumberInput value={value2} onChange={onChange2} />
      </div>
    </div>
  );
};
