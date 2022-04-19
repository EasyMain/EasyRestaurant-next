import { TextField } from "@mui/material";
import * as React from "react";
import EyeIcon from "../../common/Icon.common";

export default function MuiTextFieldTest() {
  return (
    <TextField
      variant="standard"
      helperText="Esto es un error"
      error
      InputProps={{
        endAdornment: <EyeIcon />,
      }}
    />
  );
}
