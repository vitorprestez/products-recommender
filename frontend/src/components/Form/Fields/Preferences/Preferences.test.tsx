import { render, screen, fireEvent } from "@testing-library/react";
import Preferences from "./Preferences";

describe("Preferences", () => {
  const preferences = ["Preferência A", "Preferência B"];
  const mockOnPreferenceChange = jest.fn();

  beforeEach(() => {
    mockOnPreferenceChange.mockClear();
  });

  it("renderiza o título e as opções corretamente", () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={[]}
        onPreferenceChange={mockOnPreferenceChange}
      />
    );

    expect(screen.getByText("Preferências:")).toBeInTheDocument();
    preferences.forEach((preference) => {
      expect(screen.getByText(preference)).toBeInTheDocument();
    });
  });

  it("marca os checkboxes corretos com base em selectedPreferences", () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={["Preferência A"]}
        onPreferenceChange={mockOnPreferenceChange}
      />
    );

    const checkbox1 = screen.getByLabelText(
      "Preferência A"
    ) as HTMLInputElement;
    const checkbox2 = screen.getByLabelText(
      "Preferência B"
    ) as HTMLInputElement;

    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(false);
  });

  it("dispara onPreferenceChange ao marcar uma nova preferência", () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={[]}
        onPreferenceChange={mockOnPreferenceChange}
      />
    );

    const checkbox = screen.getByLabelText("Preferência A");
    fireEvent.click(checkbox);

    expect(mockOnPreferenceChange).toHaveBeenCalledWith(["Preferência A"]);
  });

  it("remove preferência ao desmarcar uma já selecionada", () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={["Preferência A"]}
        onPreferenceChange={mockOnPreferenceChange}
      />
    );

    const checkbox = screen.getByLabelText("Preferência A");
    fireEvent.click(checkbox);

    expect(mockOnPreferenceChange).toHaveBeenCalledWith([]);
  });
});
