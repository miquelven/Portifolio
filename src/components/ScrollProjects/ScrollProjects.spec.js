import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import cards from "../../data/cards.jsx";

import ScrollProjects from "./index.jsx";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ScrollProjects />
    </MemoryRouter>
  );
};

describe("ScrollProjects component", () => {
  it("should render component", () => {
    renderComponent();

    expect(screen.getByTestId("project")).toBeInTheDocument();
  });

  it("should show the list of the projects", () => {
    renderComponent();

    cards.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });

  it("should have correct project and Github links for each card", () => {
    renderComponent();
    cards.forEach((card) => {
      const projectLink = screen.getByRole("link", {
        name: /project/i,
        exact: false,
      });
      const githubLink = screenByRole("link", {
        name: /github/i,
        exact: false,
      });
      expect(projectLink).toHaveAttribute("href", card.projectLink);
      expect(githubLink).toHaveAttribute("href", card.githubLink);
    });
  });
});
