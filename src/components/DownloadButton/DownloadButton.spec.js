import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DownloadButton from "./index";

jest.useFakeTimers();

describe("DownloadButton component", () => {
  it("should render the component correctly", () => {
    render(<DownloadButton />);

    const buttonText = screen.getByText("Currículo");
    const downloadIcon = screen.getByRole("img");

    expect(buttonText).toBeInTheDocument();
    expect(downloadIcon).toBeInTheDocument();
  });

  it("should display 'Baixando' text and loader when clicked", () => {
    render(<DownloadButton />);

    const button = screen.getByRole("link");
    const buttonText = screen.getByText("Currículo");

    fireEvent.click(button);

    expect(buttonText).toHaveTextContent("Baixando");

    const downloadIcon = screen.getByRole("img");
    const downloadLoader = screen.getByTestId("download-loader");

    expect(downloadIcon).toHaveClass("hidden");
    expect(downloadLoader).not.toHaveClass("hidden");
  });

  it("should display 'Baixado' text and checkmark after download and then revert to 'Currículo'", async () => {
    render(<DownloadButton />);

    const button = screen.getByRole("link");
    const buttonText = screen.getByText("Currículo");

    fireEvent.click(button);

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      const downloadLoader = screen.getByTestId("download-loader");
      const downloadCheckMark = screen.getByTestId("checkmark");

      expect(buttonText).toHaveTextContent("Baixado");
      expect(downloadLoader).toHaveClass("hidden");
      expect(downloadCheckMark).not.toHaveClass("hidden");
    });

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      const downloadIcon = screen.getByRole("img");
      const downloadCheckMark = screen.getByTestId("checkmark");

      expect(buttonText).toHaveTextContent("Currículo");
      expect(downloadCheckMark).toHaveClass("hidden");
      expect(downloadIcon).not.toHaveClass("hidden");
    });
  });
});
