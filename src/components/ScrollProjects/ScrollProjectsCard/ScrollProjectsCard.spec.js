import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./index";
import { BrowserRouter } from "react-router-dom";

const cardMock = {
  title: "Test",
  url: "https://example.com/image.jpg",
  projectLink: "https://example.com/project",
  githubLink: "https://github.com/example/repo",
  stacks: ["React", "Node.js", "CSS"],
  stackColors: ["#61DAFB", "#3C873A", "#264DE4"],
  description: "This is a test description for the project.",
};

const renderWithRouter = () => {
  render(
    <BrowserRouter>
      <Card card={cardMock} />
    </BrowserRouter>
  );
};

describe("Card component", () => {
  it("should render the component without crashing", () => {
    renderWithRouter();

    const cardElement = screen.getByTestId("scrollProjectsCard");
    expect(cardElement).toBeInTheDocument();
  });

  it("should display the correct title", () => {
    renderWithRouter();

    const titleElement = screen.getByText(cardMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("should display the correct image", () => {
    renderWithRouter();

    const backgroundImage = screen.getByRole("img");
    expect(backgroundImage).toHaveStyle(
      `background: url(${cardMock.url}); background-size: cover; background-position: top center;`
    );
  });

  it("should display the correct description", () => {
    renderWithRouter();

    const descriptionElement = screen.getByText(cardMock.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should display the correct stacks", () => {
    renderWithRouter();

    cardMock.stacks.forEach((stack, index) => {
      const stackElement = screen.getByText(stack);
      expect(stackElement).toBeInTheDocument();
      expect(stackElement).toHaveStyle(`color: ${cardMock.stackColors[index]}`);
    });
  });

  it("should have correct project and GitHub links", () => {
    renderWithRouter();

    const projectLink = screen.getByTestId("project");
    expect(projectLink).toHaveAttribute("href", cardMock.projectLink);

    const githubLink = screen.getByTestId("github");
    expect(githubLink).toHaveAttribute("href", cardMock.githubLink);
  });

  it("should change the url pathname when clicking on the image", () => {
    renderWithRouter();
    const linkImg = screen.getByTestId("linkImg");

    fireEvent.click(linkImg);

    const checkPath = window.location.pathname == `/${cardMock.title}`;

    expect(checkPath).toBeTruthy();
  });
});
