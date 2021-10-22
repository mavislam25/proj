import React, { useState } from "react";
import ZoomSlider from "../../../components/ZoomSlider";
import PriceRangeSlider from "../../../components/PriceRangeSlider";

export default {
  title: "Controls/Molecules/Slider",
  component: ZoomSlider,
};

export const Zoom = () => {
  const [value, setValue] = useState(50);
  const handleChange = (_e, value) => setValue(() => value);

  return (
    <ZoomSlider
      style={{ width: 400 }}
      SliderProps={{
        min: 0,
        max: 100,
        value,
        onChange: handleChange,
      }}
    />
  );
};

export const PriceRange = () => {
  const [value, setValue] = useState([0, 10000]);
  const handleChange = (_, newValue) => setValue(() => newValue);
  return (
    <PriceRangeSlider
      style={{ width: 400 }}
      label="Set Price Range"
      SliderProps={{
        value,
        min: 0,
        max: 100000,
        step: 10000,
        onChange: handleChange,
      }}
    />
  );
};
