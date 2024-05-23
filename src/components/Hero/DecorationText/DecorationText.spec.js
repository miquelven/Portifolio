import { screen, render, fireEvent } from "@testing-library/react";
import DecorationText from ".";

describe("DecorationText component", () => {
  it("should render component", () => {
    render(<DecorationText />);

    expect(screen.getByText("Miquelven")).toBeInTheDocument();
  });

  it("should change the text when mouse enter and leave in element", () => {
    const TARGET_TEXT = "Miquelven";
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const timerDefault = 100;

    render(<DecorationText />);

    const textElement = screen.getByText("Miquelven");

    fireEvent.mouseEnter(textElement);

    setTimeout(() => {
      expect(textElement.textContent).not.Tobe("Miquelven");

      fireEvent.mouseLeave(textElement);

      setTimeout(() => {
        expect(textElement).toHaveTextContent("Miquelven");
      }, timerDefault);
    }, SHUFFLE_TIME * TARGET_TEXT.length * CYCLES_PER_LETTER + timerDefault);
  });
});
