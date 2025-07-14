import { useState } from "react";
import recommendationService from "../services/recommendation.service";
import { Product } from "../types/product";
import { Filters, RecommendationMode } from "../types/recommendation";

const useRecommendations = (products: Product[]) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const getRecommendations = (
    filters: Filters,
    mode: RecommendationMode
  ): Product[] => {
    const result = recommendationService.getRecommendations(
      filters,
      products,
      mode
    );

    return result;
  };

  return { recommendations, getRecommendations, setRecommendations };
};

export default useRecommendations;
