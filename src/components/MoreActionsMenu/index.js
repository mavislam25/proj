import { FormControl, Menu } from "@material-ui/core";
import DropdownHeaderIcon from "../DropdownHeaderIcon";
import { AddIcon } from "../Icons/MainIcons";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const MoreActionsMenu = ({ children }) => {
  const anchorRef = useRef();
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FormControl>
      <DropdownHeaderIcon
        label="More Actions"
        IconComponent={AddIcon}
        onClick={handleClick}
        ref={anchorRef}
      />
      <Menu
        elevation={3}
        open={!!anchorEl}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </FormControl>
  );
};

MoreActionsMenu.propTypes = {
  children: PropTypes.node,
};

export default MoreActionsMenu;
