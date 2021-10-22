import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { CalendarIcon } from "../../components/Icons/MainIcons";

export default {
  title: "Pickers/DatePicker",
  component: KeyboardDatePicker,
};

export const SherpaDatePicker = () => {
  const [date, setDate] = useState(null);
  return (
    <KeyboardDatePicker
      format="dd-MMM-yyyy"
      disableToolbar
      initialFocusedDate={null}
      value={date}
      placeholder={"Select Date"}
      keyboardIcon={<CalendarIcon style={{ fontSize: 16 }} />}
      onChange={(value) => {
        setDate(value);
      }}
      DialogProps={{
        PaperProps: {
          elevation: 3,
        },
      }}
    />
  );
};

export const Disabled = () => {
  const [date, setDate] = useState(null);
  return (
    <KeyboardDatePicker
      format="dd-MMM-yyyy"
      disableToolbar
      initialFocusedDate={null}
      value={date}
      placeholder={"Select Date"}
      keyboardIcon={<CalendarIcon style={{ fontSize: 16 }} />}
      onChange={(value) => {
        setDate(value);
      }}
      DialogProps={{
        PaperProps: {
          elevation: 3,
        },
      }}
      disabled
    />
  );
};
