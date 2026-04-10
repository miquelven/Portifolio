import CardHero from "./index";
import { screen, render, fireEvent } from "@testing-library/react";
import { I18nProvider } from "../../../i18n";

describe("CardHero component", () => {
  it("should render component", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <CardHero />
      </I18nProvider>,
    );

    const card = screen.getByTestId("cardHero");
    expect(card).toBeInTheDocument();
  });

  it("should change the rotate in element when mouse is over", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <CardHero />
      </I18nProvider>,
    );

    const card = screen.getByTestId("cardHero");

    fireEvent.mouseMove(card);

    expect(card).not.toHaveStyle("rotateX: 0");
    expect(card).not.toHaveStyle("rotateY: 0");
  });
});
