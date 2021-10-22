import IndicatorBar from "../../components/IndicatorBar";
import React from "react";

export default {
  title: "InputFields/Molecules/IndicatorBar",
  component: IndicatorBar,
};

export const PrimaryIndicatorBar = () => <IndicatorBar primaryIndicator />;

export const SecondaryIndicatorBar = () => <IndicatorBar secondaryIndicator />;

export const PrimaryAndSecondaryIndicatorBar = () => (
  <IndicatorBar primaryIndicator secondaryIndicator />
);
