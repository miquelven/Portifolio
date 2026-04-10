import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import cards from "../../data/cards.jsx";
import { I18nProvider } from "../../i18n";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

jest.mock("swiper/modules", () => ({
  EffectCards: {},
}));

jest.mock("swiper/css", () => ({}));
jest.mock("swiper/css/effect-cards", () => ({}));

import ScrollProjects from "./index.jsx";

const renderComponent = () => {
  localStorage.setItem("lang", "pt");
  render(
    <I18nProvider>
      <MemoryRouter>
        <ScrollProjects />
      </MemoryRouter>
    </I18nProvider>,
  );
};

describe("ScrollProjects component", () => {
  it("should render component", () => {
    renderComponent();

    const elements = screen.getAllByTestId("project");
    expect(elements.some((el) => el.tagName === "SECTION")).toBeTruthy();
  });

  it("should show the list of the projects", () => {
    renderComponent();

    cards.forEach((card) => {
      expect(screen.getAllByText(card.title).length).toBeGreaterThan(0);
    });
  });

  it("should have correct project and Github links for each card", () => {
    renderComponent();
    const projectLinks = screen.getAllByTestId("project");
    const githubLinks = screen.getAllByTestId("github");

    expect(
      projectLinks.some((a) => a.getAttribute("href") === cards[0].projectLink),
    ).toBeTruthy();
    expect(
      githubLinks.some((a) => a.getAttribute("href") === cards[0].githubLink),
    ).toBeTruthy();
  });
});
