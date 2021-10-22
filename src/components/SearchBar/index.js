import React, { useState } from "react";
import SherpaInput from "../SherpaInput";
import { InputAdornment, makeStyles } from "@material-ui/core";
import InputAdornmentIconButton from "../InputAdornmentIconButton";
import { ReactComponent as ClearIcon } from "../../assets/icons/misc/clear.svg";
import { SearchIcon } from "../Icons/MainIcons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    "& .MuiInputBase-root": {
      backgroundColor: `${theme.palette.common.white} !important`,
    },
  },
}));

const SearchBar = ({ onClickSearch, ...TextFieldProps }) => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);
  const classes = useStyles();

  return (
    <SherpaInput
      {...TextFieldProps}
      value={value}
      // label="Label"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {value.length ? (
              <InputAdornmentIconButton onClick={() => setValue("")}>
                <ClearIcon />
              </InputAdornmentIconButton>
            ) : null}
            <InputAdornmentIconButton onClick={onClickSearch}>
              <SearchIcon style={{ fontSize: 16 }} />
            </InputAdornmentIconButton>
          </InputAdornment>
        ),
      }}
      InputAdornmentProps={{
        position: "start",
      }}
      className={classes.searchBar}
    />
  );
};

SearchBar.propTypes = {
  onClickSearch: PropTypes.func,
  TextFieldProps: PropTypes.object,
};

SearchBar.defaultProps = {
  onClickSearch: () => {},
  TextFieldProps: {},
};

export default SearchBar;
