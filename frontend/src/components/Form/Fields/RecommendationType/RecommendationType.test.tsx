import { render, screen, fireEvent } from "@testing-library/react";
import RecommendationType from "./RecommendationType";
import { RecommendationMode } from "../../../../types/recommendation";

describe("RecommendationType", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renderiza corretamente os rótulos de opções", () => {
    render(
      <RecommendationType
        selectedRecommendationType={RecommendationMode.SingleProduct}
        onRecommendationTypeChange={mockOnChange}
      />
    );

    expect(screen.getByText("Tipo de Recomendação:")).toBeInTheDocument();
    expect(screen.getByText("Produto Único")).toBeInTheDocument();
    expect(screen.getByText("Múltiplos Produtos")).toBeInTheDocument();
  });

  it("marca o tipo selecionado corretamente", () => {
    render(
      <RecommendationType
        selectedRecommendationType={RecommendationMode.MultipleProducts}
        onRecommendationTypeChange={mockOnChange}
      />
    );

    const radioMultiple = screen.getByTestId(
      RecommendationMode.MultipleProducts
    ) as HTMLInputElement;
    const radioSingle = screen.getByTestId(
      RecommendationMode.SingleProduct
    ) as HTMLInputElement;

    expect(radioMultiple.checked).toBe(true);
    expect(radioSingle.checked).toBe(false);
  });

  it("chama onRecommendationTypeChange ao trocar a opção", () => {
    render(
      <RecommendationType
        selectedRecommendationType={RecommendationMode.SingleProduct}
        onRecommendationTypeChange={mockOnChange}
      />
    );

    const radioMultiple = screen.getByTestId(
      RecommendationMode.MultipleProducts
    );
    fireEvent.click(radioMultiple);

    expect(mockOnChange).toHaveBeenCalledWith(
      RecommendationMode.MultipleProducts
    );
  });
});
