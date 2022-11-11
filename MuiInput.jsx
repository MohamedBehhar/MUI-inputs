import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const MuiInputStyle = styled.div`
  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
    height: 50px;
    padding: 0 1rem;
    border: none;
  }
  ///// border ////////////
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
    border-radius: 8px;
    border: 1px solid #54bbcd;
  }

  ////////////////////// mui text field ////////////
  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20.4224px;
    line-height: 22px;
    color: #0a5869;
    border: none;
  }
`;

const MuiInput = (props) => {
  const { name, label, placeholder, value, onChange, required, type } = props;

  return (
    <MuiInputStyle>
      <TextField
        border
        fullWidth
        sx={{
          background: "white",
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        }}
        type={type}
        name={name}
        hiddenLabel={true}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id="outlined-margin-none"
        size="small"
        error={false}
        disableUnderline={true}
      />
    </MuiInputStyle>
  );
};

export default MuiInput;
