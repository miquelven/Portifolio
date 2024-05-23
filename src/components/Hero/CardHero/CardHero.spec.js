import CardHero from "./index";
import { screen, render, fireEvent } from "@testing-library/react";

describe("CardHero component", () => {
  it("should render component", () => {
    render(<CardHero />);

    const card = screen.getByTestId("cardHero");
    expect(card).toBeInTheDocument();
  });

  it("should change the rotate in element when mouse is over", () => {
    render(<CardHero />);

    const card = screen.getByTestId("cardHero");

    fireEvent.mouseMove(card);

    expect(card).not.toHaveStyle("rotateX: 0");
    expect(card).not.toHaveStyle("rotateY: 0");
  });
});
