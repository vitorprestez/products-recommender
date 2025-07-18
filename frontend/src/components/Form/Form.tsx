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

  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: RecommendationMode.SingleProduct,
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

  const handleReset = () => {
    resetForm();
    setRecommendations([]);
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <h2 className="text-xl font-semibold mb-4" tabIndex={0}>
        Selecione suas preferências e funcionalidades
      </h2>

      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected: string[]) =>
          handleChange("selectedPreferences", selected)
        }
      />

      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
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

      <div className="flex flex-col gap-2 mt-4">
        <SubmitButton text="Obter recomendações" />

        <button
          data-testid="remove-filters-button"
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-gray-100  rounded hover:bg-gray-200 transition"
        >
          Limpar filtros
        </button>
      </div>
    </form>
  );
}

export default Form;
