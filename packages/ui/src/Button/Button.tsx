import { useRef } from "react";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";
import { createRippleEffect } from "./Ripple";

interface ButtonProps extends AriaButtonProps<"button"> {}

const Button = (props: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      {...buttonProps}
      className="bg-primary/75 px-4 py-2 text-white"
      ref={ref}
      onClick={createRippleEffect}
    >
      {children}
    </button>
  );
};

export { Button };
