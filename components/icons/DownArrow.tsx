import * as React from "react";

interface DownArrowProps {
  size?: number | string;
}

export const DownArrow = ({ size = 20 }: DownArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="navbar-wallet-dropdown"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
