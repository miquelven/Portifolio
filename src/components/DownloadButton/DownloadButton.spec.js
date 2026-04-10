import { render, screen, fireEvent, act } from "@testing-library/react";
import DownloadButton from "./index";
import { I18nProvider } from "../../i18n";

jest.useFakeTimers();

describe("DownloadButton component", () => {
  it("should render the component correctly", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <DownloadButton />
      </I18nProvider>,
    );

    expect(screen.getByText("Baixar CV")).toBeInTheDocument();
  });

  it("should display 'Baixando' text and loader when clicked", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <DownloadButton />
      </I18nProvider>,
    );

    const button = screen.getByRole("link");
    fireEvent.click(button);

    expect(screen.getByText("Baixando...")).toBeInTheDocument();
  });

  it("should display 'Baixado' text and checkmark after download and then revert to 'Currículo'", async () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <DownloadButton />
      </I18nProvider>,
    );

    const button = screen.getByRole("link");
    fireEvent.click(button);

    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByText("Baixado!")).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("Baixar CV")).toBeInTheDocument();
  });
});
