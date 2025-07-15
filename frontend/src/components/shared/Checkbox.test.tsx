import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renderiza o checkbox e o texto filho", () => {
    render(<Checkbox id={"teste"} label="Teste" />);

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();

    const labelText = screen.getByText("Teste");
    expect(labelText).toBeInTheDocument();
  });

  it("passa as props corretamente para o input", () => {
    render(
      <Checkbox
        id="checkbox"
        checked={true}
        onChange={() => {}}
        label="teste"
      />
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toHaveAttribute("id", "checkbox");
    expect(checkbox).toBeChecked();
  });

  it("dispara o onChange quando clicado", () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} id={"teste"} label="teste" />);

    const checkbox = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});
