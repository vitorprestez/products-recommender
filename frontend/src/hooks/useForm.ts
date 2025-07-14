import { useState } from "react";
import { RecommendationMode } from "../types/recommendation";

interface UseFormProps {
  selectedPreferences: string[];
  selectedFeatures: string[];
  selectedRecommendationType: RecommendationMode;
}

const useForm = (initialState: UseFormProps) => {
  const [formData, setFormData] = useState<UseFormProps>(initialState);

  const handleChange = (
    field: keyof UseFormProps,
    value: string[] | string
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, resetForm };
};

export default useForm;
