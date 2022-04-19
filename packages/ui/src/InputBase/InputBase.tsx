import { AriaTextFieldOptions } from "@react-aria/textfield";
import React from "react";
import { useTextField } from "react-aria";
import { getCurrentRef } from "../utils/getCurrentRef";

interface InputBaseProps extends AriaTextFieldOptions<"input"> {
  multiline?: boolean;
  rightNode?: JSX.Element;
}

const InputBase = React.forwardRef(
  (props: InputBaseProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      description,
      label,
      placeholder,
      errorMessage,
      isRequired,
      rightNode,
      isDisabled,
      multiline = false,
    } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField(
        {
          ...props,
          inputElementType: multiline ? "textarea" : "input",
        },
        inputRef
      );

    React.useImperativeHandle(ref, getCurrentRef(inputRef));

    const Input = React.useCallback(
      (props) => (multiline ? <textarea {...props} /> : <input {...props} />),
      [multiline]
    );

    return (
      <div className={`w-full text-black/60 `}>
        <div
          className={`relative flex items-center
                      ${isDisabled && "opacity-70"}
                      before:h-[1.5px] before:bg-black/[12%] before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:hover:bg-black before:hover:h-0.5 before:-z-50
                      before:transition-all
                      ${isDisabled && "after:scale-x-0 before:hover:h-[1.5px] before:hover:before:bg-black/[12%]"}
                      after:content-[''] after:w-full after:scale-x-0 after:bg-primary 
                      after:absolute after:left-0 after:bottom-0 after:z-10 after:h-0.5
                      after:origin-center after:transition-transform after:duration-300  
                      after:focus-within:scale-x-100
                      ${errorMessage && "after:bg-red-500 after:scale-x-100"}`}
        >
          <Input
            {...inputProps}
            ref={ref}
            required={isRequired}
            placeholder={placeholder || " "}
            className="peer w-full pb-1 pt-2 bg-transparent border-none 
                       outline-none shadow-outline-blue
                       text-black/[87%] disabled:cursor-not-allowed"
          />
          {rightNode && <div className={`p-2 ${errorMessage && "text-red-500"}`}>{rightNode}</div>}
          <label
            {...labelProps}
            className={`absolute left-0 -top-4 w-full -z-10 origin-left
                       transition-all duration-300 scale-75
                       text-ellipsis overflow-hidden whitespace-nowrap
                       peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100
                       peer-focus:-top-4 peer-focus:scale-75 peer-focus:text-primary
                       ${errorMessage && "text-red-500"}`}
          >
            {label} {isRequired && "*"}
          </label>
        </div>
        {descriptionProps && !errorMessage && (
          <div {...descriptionProps} className="text-xs pt-1">
            {description}
          </div>
        )}
        {errorMessage && (
          <span {...errorMessageProps} className="text-xs pt-1 text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

export { InputBase };
