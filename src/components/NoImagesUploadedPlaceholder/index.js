import { Avatar, Typography } from "@material-ui/core";
import { ImageIcon } from "../Icons/MainIcons";
import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const NoImagesUploadedPlaceholder = ({ size }) => (
  <Box
    color="grey.400"
    display="inline-flex"
    alignItems="center"
    flexDirection="column"
    textAlign="center"
  >
    <Avatar
      style={{
        width: size === "small" ? "24px" : "120px",
        height: size === "small" ? "24px" : "120px",
      }}
    >
      <ImageIcon style={{ fontSize: size === "small" ? "16px" : "68px" }} />
    </Avatar>
    <Typography
      variant="h4"
      style={{ ...(size === "large" && { paddingTop: "5px" }) }}
    >
      No Images {size === "small" && <br />} Uploaded
    </Typography>
  </Box>
);

NoImagesUploadedPlaceholder.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
};

NoImagesUploadedPlaceholder.defaultProps = {
  size: "small",
};

export default NoImagesUploadedPlaceholder;
