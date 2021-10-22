import { makeStyles, Step, StepLabel, Stepper } from "@material-ui/core";
import UserActionBarContainer from "../../../components/UserActionBarContainer";
import React from "react";

export default {
  title: "Tables/Examples/Stepper",
  component: Stepper,
};

const steps = {
  DOCUMENT_OR_PARCEL: 0,
  ADDRESSING: 1,
  SHIPMENT_DETAILS: 2,
  COURIER: 3,
  CONFIRM_DETAILS: 4,
};

const useStyles = makeStyles((theme) => ({
  stepper: {
    width: "780px",
  },
  generateBtn: {
    marginLeft: theme.spacing(5),
    whiteSpace: "nowrap",
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <UserActionBarContainer elevation={0}>
      <Stepper activeStep={1} className={classes.stepper}>
        <Step key={steps.ADDRESSING}>
          <StepLabel>Addressing</StepLabel>
        </Step>
        <Step key={steps.SHIPMENT_DETAILS}>
          <StepLabel>Shipment Details</StepLabel>
        </Step>
        <Step key={steps.COURIER}>
          <StepLabel>Courier</StepLabel>
        </Step>
        <Step key={steps.CONFIRM_DETAILS}>
          <StepLabel>Confirm Details</StepLabel>
        </Step>
      </Stepper>
    </UserActionBarContainer>
  );
};
