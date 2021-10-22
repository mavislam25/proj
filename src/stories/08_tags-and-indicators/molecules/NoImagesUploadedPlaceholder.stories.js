import React from "react";
import { NoImagesUploadedPlaceholder } from "../../../components";

export default {
  title: "Tags/Molecules/NoImagesUploadedPlaceholder",
  component: NoImagesUploadedPlaceholder,
};

export const Small = () => <NoImagesUploadedPlaceholder size="small" />;

export const Large = () => <NoImagesUploadedPlaceholder size="large" />;
