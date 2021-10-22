import TableField from "../../components/TableField";
import React from "react";
import SearchBar from "../../components/SearchBar";

export default {
  title: "InputFields/Molecules/SearchBar",
  component: TableField,
};

export const Default = () => (
  <SearchBar style={{ width: 300 }} placeholder="Search products..." />
);
