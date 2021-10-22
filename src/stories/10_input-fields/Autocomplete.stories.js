import SherpaAutocomplete from "../../components/SherpaAutocomplete";
import React, { useState } from "react";

export default {
  title: "InputFields/Molecules/Autocomplete",
  component: SherpaAutocomplete,
};

const countryNames = [
  { id: 1, name: "Afghanistan" },
  { id: 2, name: "Albania" },
  { id: 3, name: "Algeria" },
];

export const Default = () => {
  const [value, setValue] = useState(null);

  const handleChangeValue = (_, option) => setValue(() => option);

  return (
    <SherpaAutocomplete
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.id === value.id}
      options={countryNames}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(null);

  const handleChangeValue = (_, option) => setValue(() => option);

  return (
    <SherpaAutocomplete
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.id === value.id}
      options={countryNames}
      value={value}
      onChange={handleChangeValue}
      disabled
    />
  );
};
