import { Product } from "../types/product";
import { RecommendationMode } from "../types/recommendation";

interface FormData {
  selectedPreferences: string[];
  selectedFeatures: string[];
}

const getRecommendations = (
  formData: FormData = { selectedPreferences: [], selectedFeatures: [] },
  products: Product[],
  mode: RecommendationMode = RecommendationMode.SingleProduct
): Product[] => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  return [
    {
      id: 1,
      name: "RD Station CRM",
      category: "Vendas",
      preferences: [
        "Integração fácil com ferramentas de e-mail",
        "Personalização de funis de vendas",
        "Relatórios avançados de desempenho de vendas",
      ],
      features: [
        "Gestão de leads e oportunidades",
        "Automação de fluxos de trabalho de vendas",
        "Rastreamento de interações com clientes",
      ],
    },
  ];
};

export default { getRecommendations };
