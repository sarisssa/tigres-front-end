import { render, screen } from "@testing-library/react";
import { TipContainer } from "./TipContainer";

describe("TipContainer", () => {
  it("should render the passed props", () => {
    render(<TipContainer tip={"Test tip"} />);

    expect(screen.getByText("Tip:")).toBeInTheDocument();
    expect(screen.getByText("Test tip")).toBeInTheDocument();
  });
});
