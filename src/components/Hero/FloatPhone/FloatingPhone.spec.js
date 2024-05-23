import { render, screen } from "@testing-library/react";
import FloatingPhone from ".";

describe("FloatingPhone component", () => {
  it("should render component", () => {
    render(<FloatingPhone />);

    expect(screen.getByTestId("floatingPhone")).toBeInTheDocument();
  });

  it("should animate the element's transform translate", () => {
    render(<FloatingPhone />);

    const floatingPhoneAnimated = screen.getByTestId("floatingPhoneAnimated");

    expect(floatingPhoneAnimated).toHaveStyle(
      "transform: translateZ(8px) translateY(-2px)"
    );

    setTimeout(() => {
      expect(floatingPhoneAnimated).toHaveStyle(
        "transform: translateZ(40px) translateY(-8px)"
      );
    }, 2000);
  });
});
