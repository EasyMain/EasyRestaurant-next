import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import { ElementType, useRef } from "react";
import { useRipple } from "react-use-ripple";

export const Button = (props: AriaButtonProps<"button">) => {
  const refButton = useRef<HTMLButtonElement | null>(null);
  const refRipple = useRef<HTMLDivElement | null>(null);
  const { buttonProps, isPressed } = useButton(props, refButton);
  const { children } = props;

  useRipple(refRipple, {
    disabled: !isPressed,
  });

  return (
    // <div  onClick={() => console.log("Click cojoness")}>
    <button
      {...buttonProps}
      // ref={refButton}
      ref={refRipple}
      className={`bg-blue-500 py-3 px-6 text-white
        ${isPressed ? "shadow-lg bg-pink-500" : ""}
      `}
    >
      {children}
    </button>
    // </div>
  );
};
