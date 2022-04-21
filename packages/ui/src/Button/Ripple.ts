import React from "react";

const findFurthestPoint = (
  clickPointX: number,
  elementWidth: number,
  offsetX: number,
  clickPointY: number,
  elementHeight: number,
  offsetY: number
) => {
  const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
  const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
  const z = Math.hypot(
    x - (clickPointX - offsetX),
    y - (clickPointY - offsetY)
  );

  return z;
};

const appyStyles = (
  element: HTMLElement,
  color: string,
  rect: DOMRect,
  radius: number,
  event: React.MouseEvent
) => {
  element.classList.add("ripple");
  element.style.backgroundColor =
    color === "dark"
      ? "rgba(0,0,0, 0.2)"
      : color === "light"
      ? "rgba(255,255,255, 0.3)"
      : color;
  element.style.borderRadius = "50%";
  element.style.pointerEvents = "none";
  element.style.position = "absolute";
  element.style.left = event.clientX - rect.left - radius + "px";
  element.style.top = event.clientY - rect.top - radius + "px";
  element.style.width = element.style.height = radius * 2 + "px";
};

const applyAnimation = (element: HTMLElement, duration: number) => {
  element.animate(
    [
      {
        transform: "scale(0)",
        opacity: 1,
      },
      {
        transform: "scale(1.5)",
        opacity: 0,
      },
    ],
    {
      duration,
      easing: "linear",
    }
  );
};

const createRippleEffect = (
  event: React.MouseEvent,
  {
    color,
    duration,
  }: {
    color: "dark" | "light" | string;
    duration: number;
  } = {
    color: "light",
    duration: 500,
  }
) => {
  const element = event.currentTarget as HTMLElement;

  element.style.position = "relative";
  element.style.overflow = "hidden";

  const rect = element.getBoundingClientRect();

  const radius = findFurthestPoint(
    event.clientX,
    element.offsetWidth,
    rect.left,
    event.clientY,
    element.offsetHeight,
    rect.top
  );

  const circle = document.createElement("span");

  appyStyles(circle, color, rect, radius, event);
  applyAnimation(circle, duration);

  element.appendChild(circle);

  setTimeout(() => circle.remove(), duration);
};

export { createRippleEffect };
