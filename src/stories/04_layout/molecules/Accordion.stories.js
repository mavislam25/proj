import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import React from "react";

export default {
  title: "Layout/Molecules/Accordion",
  component: Accordion,
};

export const Default = () => (
  <Accordion>
    <AccordionSummary>Title</AccordionSummary>
    <AccordionDetails>
      <Typography variant="body1">
        Here is some content inside the accordion
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export const ControlledCollapsed = () => (
  <Accordion expanded={false}>
    <AccordionSummary>Title</AccordionSummary>
    <AccordionDetails>
      <Typography variant="body1">
        Here is some content inside the accordion
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export const ControlledExpanded = () => (
  <Accordion expanded>
    <AccordionSummary>Title</AccordionSummary>
    <AccordionDetails>
      <Typography variant="body1">
        Here is some content inside the accordion
      </Typography>
    </AccordionDetails>
  </Accordion>
);
