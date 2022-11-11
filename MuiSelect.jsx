import React, { useState } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const MuiSelectStyle = styled.div`
  .MuiFormControl-root {
    height: 52px;
    width: 100%;
  }
  ////////////////////// mui text field ////////////
  .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20.4224px;
    line-height: 22px;
    color: #0a5869;
    border: none;
  }

  ///// border ////////////
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const MuiSelect = (props) => {
  const [formData, setFormData] = useState({});
  const { name, value, onChange, required, menuItemArr } = props;
  return (
    <MuiSelectStyle>
      <FormControl
        fullWidth
        size="small"
        sx={{
          width: "138px",
        }}
      >
        <Select
          sx={{
            background: "white",
            height: "100%",
            border: "1px solid #54BBCD",
            borderRadius: "8px",
            fontFamily: "Ubuntu",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          disableUnderline={true}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
        >
          {menuItemArr.map((el, i) => {
            return (
              <MenuItem value={el} key={i}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </MuiSelectStyle>
  );
};

export default MuiSelect;
