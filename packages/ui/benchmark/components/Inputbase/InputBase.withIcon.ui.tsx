import React from "react";
import EyeIcon from "../../common/Icon.common";
import { InputBase } from "../../../src/InputBase/InputBase";

export default function () {
  return (
    <InputBase
      label="Descripción"
      description="Esto es una descripcion"
      rightNode={<EyeIcon />}
    />
  );
}
