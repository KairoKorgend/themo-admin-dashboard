import React from "react";
import PropTypes from "prop-types";
import { AppIcon } from "src/components/index";
import "./styles/SearchInputWithIcon.scss";

const SearchInputWithIcon = ({ placeholder, value, onChange }) => (
  <div className="searchContainer">
    <input
      type="text"
      className="formControl"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <AppIcon name="cilSearch" className="searchIcon" />
  </div>
);

SearchInputWithIcon.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SearchInputWithIcon;
