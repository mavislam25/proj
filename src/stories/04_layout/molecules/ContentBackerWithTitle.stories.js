import ContentCardContainer from "../../../components/ContentCardContainer";
import { Typography } from "@material-ui/core";
import React from "react";

export default {
  title: "Layout/Molecules/ContentBackerWithTitle",
  component: ContentCardContainer,
};

export const ContentCard = () => (
  <ContentCardContainer style={{ width: 300, height: 300 }} elevation={3}>
    <Typography variant="h2">Main Content Card</Typography>
  </ContentCardContainer>
);
