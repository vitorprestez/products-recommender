import { useState } from "react";

const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field: any, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, resetForm };
};

export default useForm;
