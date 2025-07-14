import { render, screen, fireEvent } from "@testing-library/react";
import Features from "./Features";

describe("Features", () => {
  const features = ["Feature A", "Feature B"];
  const mockOnFeatureChange = jest.fn();

  beforeEach(() => {
    mockOnFeatureChange.mockClear();
  });

  it("renderiza o título e os checkboxes corretamente", () => {
    render(
      <Features
        features={features}
        selectedFeatures={[]}
        onFeatureChange={mockOnFeatureChange}
      />
    );

    expect(screen.getByText("Funcionalidades:")).toBeInTheDocument();
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it("marca os checkboxes corretos com base no selectedFeatures", () => {
    render(
      <Features
        features={features}
        selectedFeatures={["Feature A"]}
        onFeatureChange={mockOnFeatureChange}
      />
    );

    const checkbox1 = screen.getByLabelText("Feature A") as HTMLInputElement;
    const checkbox2 = screen.getByLabelText("Feature B") as HTMLInputElement;

    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(false);
  });

  it("chama onFeatureChange ao marcar e desmarcar um checkbox", () => {
    render(
      <Features
        features={features}
        selectedFeatures={[]}
        onFeatureChange={mockOnFeatureChange}
      />
    );

    const checkbox = screen.getByLabelText("Feature A");
    fireEvent.click(checkbox);

    expect(mockOnFeatureChange).toHaveBeenCalledWith(["Feature A"]);
  });

  it("remove feature do selectedFeatures ao desmarcar", () => {
    render(
      <Features
        features={features}
        selectedFeatures={["Feature A"]}
        onFeatureChange={mockOnFeatureChange}
      />
    );

    const checkbox = screen.getByLabelText("Feature A");
    fireEvent.click(checkbox);

    expect(mockOnFeatureChange).toHaveBeenCalledWith([]);
  });
});
