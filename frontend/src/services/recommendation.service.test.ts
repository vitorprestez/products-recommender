import recommendationService from "./recommendation.service";
import mockProducts from "../mocks/mockProducts";
import { RecommendationMode } from "../types/recommendation";
import { Filters } from "../types/recommendation";

describe("recommendationService", () => {
  test("Retorna recomendação correta para SingleProduct com base nas preferências selecionadas", () => {
    const filters: Filters = {
      selectedPreferences: ["Integração com chatbots"],
      selectedFeatures: ["Chat ao vivo e mensagens automatizadas"],
    };

    const recommendations = recommendationService.getRecommendations(
      filters,
      mockProducts,
      RecommendationMode.SingleProduct
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Conversas");
  });

  test("Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas", () => {
    const filters: Filters = {
      selectedPreferences: [
        "Integração fácil com ferramentas de e-mail",
        "Personalização de funis de vendas",
        "Automação de marketing",
      ],
      selectedFeatures: [
        "Rastreamento de interações com clientes",
        "Rastreamento de comportamento do usuário",
      ],
    };

    const recommendations = recommendationService.getRecommendations(
      filters,
      mockProducts,
      RecommendationMode.MultipleProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      "RD Station CRM",
      "RD Station Marketing",
    ]);
  });

  test("Retorna apenas um produto para SingleProduct com mais de um produto de match", () => {
    const filters: Filters = {
      selectedPreferences: [
        "Integração fácil com ferramentas de e-mail",
        "Automação de marketing",
      ],
      selectedFeatures: [
        "Rastreamento de interações com clientes",
        "Rastreamento de comportamento do usuário",
      ],
    };

    const recommendations = recommendationService.getRecommendations(
      filters,
      mockProducts,
      RecommendationMode.SingleProduct
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Station Marketing");
  });

  test("Retorna o último match em caso de empate para SingleProduct", () => {
    const filters: Filters = {
      selectedPreferences: [
        "Automação de marketing",
        "Integração com chatbots",
      ],
      selectedFeatures: [],
    };

    const recommendations = recommendationService.getRecommendations(
      filters,
      mockProducts,
      RecommendationMode.SingleProduct
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe("RD Conversas");
  });

  test("Retorna array vazio quando nenhum produto corresponde aos filtros", () => {
    const filters: Filters = {
      selectedPreferences: ["preference invalida"],
      selectedFeatures: ["feature invalida"],
    };

    const recommendations = recommendationService.getRecommendations(
      filters,
      mockProducts,
      RecommendationMode.MultipleProducts
    );

    expect(recommendations).toHaveLength(0);
  });
});
