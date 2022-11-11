import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import styled from "styled-components";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MuiMultipleSelectStyle = styled.div`
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

  ////// Selected element /////
  .css-1liilgv-MuiChip-root {
    background: rgba(84, 187, 205, 0.25);
    border-radius: 7px;
  }

  ////////Selected Font style /////
  .css-6od3lo-MuiChip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    color: #1aa5c0;
  }
`;

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MuiMultipleSelect({ names }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <MuiMultipleSelectStyle>
      <FormControl size="small" fullWidth>
        <Select
          sx={{
            background: "white",
            height: "100%",
            border: "1px solid #54BBCD",
            borderRadius: "8px",
            fontFamily: "Ubuntu",
          }}
          disableUnderline={true}
          labelId="demo-simple-select-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MuiMultipleSelectStyle>
  );
}
