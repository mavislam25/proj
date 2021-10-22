import React from "react";
import { FilterIcon } from "../../../components/Icons/MainIcons";
import DropdownItem from "../../../components/DropdownItem";
import DropdownIconLabel from "../../../components/DropdownIconLabel";
import MoreActionsMenu from "../../../components/MoreActionsMenu";

export default {
  title: "Dropdowns/Examples/MoreActions",
};

export const Default = () => (
  <MoreActionsMenu>
    <DropdownItem>
      <DropdownIconLabel IconComponent={FilterIcon} label="Link Default" />
    </DropdownItem>
    <DropdownItem>
      <DropdownIconLabel IconComponent={FilterIcon} label="Link Default" />
    </DropdownItem>
    <DropdownItem>
      <DropdownIconLabel IconComponent={FilterIcon} label="Link Default" />
    </DropdownItem>
    <DropdownItem>
      <DropdownIconLabel IconComponent={FilterIcon} label="Link Default" />
    </DropdownItem>
  </MoreActionsMenu>
);
