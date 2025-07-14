import { FormEvent } from "react";
import { Preferences, Features, RecommendationType } from "./Fields";
import { SubmitButton } from "./SubmitButton";
import useProducts from "../../hooks/useProducts";
import useForm from "../../hooks/useForm";
import useRecommendations from "../../hooks/useRecommendations";
import { RecommendationMode } from "../../types/recommendation";
import { Product } from "../../types/product";

interface FormProps {
  setRecommendations: (products: Product[]) => void;
}

function Form({ setRecommendations }: FormProps) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: RecommendationMode.MultipleProducts,
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      selectedPreferences,
      selectedFeatures,
      selectedRecommendationType,
    } = formData;

    if (!selectedRecommendationType) return;

    const dataRecommendations: Product[] = getRecommendations(
      { selectedPreferences, selectedFeatures },
      selectedRecommendationType
    );

    setRecommendations(dataRecommendations);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected: string[]) =>
          handleChange("selectedPreferences", selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected: string[]) =>
          handleChange("selectedFeatures", selected)
        }
      />
      <RecommendationType
        selectedRecommendationType={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected: RecommendationMode) =>
          handleChange("selectedRecommendationType", selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
