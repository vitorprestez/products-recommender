import { Product } from "@/types/product";

type RecommendationMode = "SingleProduct" | "MultipleProducts";

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products: Product[],
  mode: RecommendationMode = "SingleProduct"
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
};

export default { getRecommendations };
