import TableField from "../../components/TableField";
import React, { useState } from "react";

export default {
  title: "InputFields/Molecules/TableField",
  component: TableField,
};

const threeSfRegex = /^\d(\.\d{0,3}?)?$/;

export const Default = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <TableField
      value={value}
      onChange={handleChange}
      style={{ width: 60 }}
      placeholder={"Enter No."}
      restrictInput={threeSfRegex}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("3.141");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <TableField
      disabled
      value={value}
      onChange={handleChange}
      style={{ width: 60 }}
      placeholder={"Enter No."}
      restrictInput={threeSfRegex}
    />
  );
};
