import { useState } from "react";
import recommendationService from "../services/recommendation.service";
import { Product } from "../types/product";
import { RecommendationMode } from "../types/recommendation";

type FormData = {
  selectedPreferences: string[];
  selectedFeatures: string[];
};

const useRecommendations = (products: Product[]) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const getRecommendations = (
    formData: FormData,
    mode: RecommendationMode
  ): Product[] => {
    const result = recommendationService.getRecommendations(
      formData,
      products,
      mode
    );

    return result;
  };

  return { recommendations, getRecommendations, setRecommendations };
};

export default useRecommendations;
