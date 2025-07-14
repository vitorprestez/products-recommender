export enum RecommendationMode {
  SingleProduct = "SingleProduct",
  MultipleProducts = "MultipleProducts",
}

export interface Filters {
  selectedPreferences: string[];
  selectedFeatures: string[];
}
