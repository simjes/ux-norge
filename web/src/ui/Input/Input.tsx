import * as React from "react";
import { InputWrapper } from "./InputWrapper";
import { inputClassNames, InputProps } from "./lib/helpers";

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <InputWrapper label={label}>
      <input {...props} className={inputClassNames} />
    </InputWrapper>
  );
};
