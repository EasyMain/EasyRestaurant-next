// Create a complete test with 100% coverage.
import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { createRippleEffect } from "./Ripple";

describe("createRippleEffect", () => {
  it("should create a ripple effect", async () => {
    const { container } = render(
      <button onClick={createRippleEffect}>Ripple</button>
    );
    fireEvent.click(container);
    await waitFor(
      () => expect(document.querySelector(".ripple")).not.toBeNull(),
      {
        timeout: 1000,
      }
    );
    const ripple = document.querySelector<HTMLElement>(".ripple");
    expect(ripple).toBeInTheDocument();
    expect(ripple!.nodeName).toBe("SPAN");
  });
});
