import { Product } from "../types/product";
import { Filters, RecommendationMode } from "../types/recommendation";

const getRecommendations = (
  filters: Filters = { selectedPreferences: [], selectedFeatures: [] },
  products: Product[],
  mode: RecommendationMode = RecommendationMode.SingleProduct
): Product[] => {
  const { selectedPreferences, selectedFeatures } = filters;

  const scored = products
    .map((product) => {
      const preferenceMatches = product.preferences.filter((preference) =>
        selectedPreferences.includes(preference)
      ).length;

      const featureMatches = product.features.filter((feature) =>
        selectedFeatures.includes(feature)
      ).length;

      const score = preferenceMatches + featureMatches;

      return { product, score };
    })
    .filter(({ score }) => score > 0);

  if (scored.length === 0) return [];

  if (mode === RecommendationMode.MultipleProducts) {
    scored.sort((a, b) => b.score - a.score);
    return scored.map(({ product }) => product);
  }

  const bestScored = scored.reduce((acc, curr) => {
    if (curr.score >= acc.score) return curr;
    return acc;
  });

  return [bestScored.product];
};

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
