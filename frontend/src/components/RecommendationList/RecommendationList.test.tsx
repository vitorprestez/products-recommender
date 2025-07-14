import { render, screen } from "@testing-library/react";
import RecommendationList from "./RecommendationList";
import mockRecommendations from "../../mocks/mockRecommendation";

describe("RecommendationList", () => {
  it("exibe o título corretamente", () => {
    render(<RecommendationList recommendations={mockRecommendations} />);
    expect(screen.getByText("Lista de Recomendações:")).toBeInTheDocument();
  });

  it("exibe a mensagem quando não há recomendações", () => {
    render(<RecommendationList recommendations={[]} />);
    expect(
      screen.getByText("Nenhuma recomendação encontrada.")
    ).toBeInTheDocument();
  });

  it("exibe a lista de recomendações corretamente", () => {
    render(<RecommendationList recommendations={mockRecommendations} />);

    expect(
      screen.queryByText("Nenhuma recomendação encontrada.")
    ).not.toBeInTheDocument();

    expect(screen.getByText("Recomendação A")).toBeInTheDocument();
    expect(screen.getByText("Recomendação B")).toBeInTheDocument();
  });
});
