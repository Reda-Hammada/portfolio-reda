import ReusableButton from "./ReusableButton";
import { screen, render } from "@testing-library/react";

describe("button render", () => {
  test("reusable button component render correctly", () => {
    let style: string = "text-red-500 bg-yellow-600 w-[400px] h-[200px]";
    let buttonText: string = "click me";

    render(<ReusableButton text={buttonText} className={style} />);

    const buttonElement = screen.getByRole("button", {
      name: buttonText,
    });

    expect(buttonElement).toBeInTheDocument();
  });

  test("props passed to reusable button component", () => {
    let className: string = "text-red-500 bg-yellow-600 w-[400px] h-[200px]";
    let buttonText: string = "click me";

    render(<ReusableButton text={buttonText} className={className} />);

    const buttonElement = screen.getByRole("button", {
      name: buttonText,
    });

    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveClass(className);
  });
});
