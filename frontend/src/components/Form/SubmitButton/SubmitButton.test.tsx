import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  it("renderiza o botão com o texto correto", () => {
    render(<SubmitButton text="Submit" />);

    const button = screen.getByTestId("submit-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Submit");
  });
});
