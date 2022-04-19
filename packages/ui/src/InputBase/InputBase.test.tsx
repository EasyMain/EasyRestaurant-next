// Create test for InputBase.tsx

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { InputBase } from "./InputBase";
import { fireEvent, render, screen } from "@testing-library/react";

describe("tests", () => {
  it("should", () => {
    render(<InputBase label="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<InputBase label="Description" isDisabled />);
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should have a right node", () => {
    render(<InputBase label="Description" rightNode={<div>Right node</div>} />);
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Right node")).toBeInTheDocument();
  });

  it("should have a right node and be disabled", () => {
    render(
      <InputBase
        label="Description"
        isDisabled
        rightNode={<div>Right node</div>}
      />
    );
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Right node")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should have a description", () => {
    render(
      <InputBase label="Description" description="This is a description" />
    );
    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("write a value", () => {
    render(<InputBase label="Description" />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input.value).toBe("Hello");
  });

  it("should have a error message", () => {
    render(
      <InputBase label="Description" errorMessage="This is an error message" />
    );
    expect(screen.getByText("This is an error message")).toBeInTheDocument();
  });

  it("should have a error message and be disabled", () => {
    render(
      <InputBase
        label="Description"
        errorMessage="This is an error message"
        isDisabled
      />
    );
    expect(screen.getByText("This is an error message")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should have a error message and not appear description", () => {
    render(
      <InputBase
        label="Description"
        errorMessage="This is an error message"
        description="This is a description"
      />
    );
    expect(screen.getByText("This is an error message")).toBeInTheDocument();
    expect(screen.queryByText("This is a description")).toBeNull();
  });

  it("should have a textarea tag", () => {
    const { container } = render(<InputBase label="Description" multiline />);
    expect(container.querySelector("textarea")).toBeInTheDocument();
    expect(container.querySelector("input")).not.toBeInTheDocument();
  });

  it("should have a input if change multiline to false", () => {
    const { container } = render(<InputBase label="Description" multiline />);
    expect(container.querySelector("textarea")).toBeInTheDocument();
    expect(container.querySelector("input")).not.toBeInTheDocument();
    render(<InputBase multiline={false} />, { container });
    expect(container.querySelector("textarea")).not.toBeInTheDocument();
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("should have a asterisk when input is required", () => {
    render(<InputBase label="Description" isRequired />);
    expect(screen.getByText("Description *")).toBeInTheDocument();
  });
  
  it("should haven't render rightNode if is null", () => {
    const { container } = render(<InputBase label="Description" isRequired />);
    const input = container.querySelector("input");
    expect(input?.nextSibling?.nodeName).toBe("LABEL");
  });
});
