import { fireEvent, render, screen } from "@testing-library/react";

import ToTopButton from "./index";
import { I18nProvider } from "../../i18n";

describe("ToTopButton component", () => {
  it("should render component", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <ToTopButton />
      </I18nProvider>,
    );

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should disappear and show when change the window scroll", () => {
    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <ToTopButton />
      </I18nProvider>,
    );

    const button = screen.getByTestId("button");

    fireEvent.scroll(window, { target: { pageYOffset: 1000 } });

    expect(button).toHaveStyle("opacity: 1; z-index: 10");

    fireEvent.scroll(window, { target: { pageYOffset: 0 } });

    expect(button).toHaveStyle("opacity: 0; z-index: -1");
  });

  it("should scroll to top when button is clicked", () => {
    window.scrollTo = jest.fn();

    window.pageYOffset = 1000;

    localStorage.setItem("lang", "pt");
    render(
      <I18nProvider>
        <ToTopButton />
      </I18nProvider>,
    );
    const button = screen.getByTestId("button");

    fireEvent.scroll(window, { target: { pageYOffset: 1000 } });

    expect(button).toHaveStyle("opacity: 1");

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
