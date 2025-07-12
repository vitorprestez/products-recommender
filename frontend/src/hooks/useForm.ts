import { useState } from "react";

const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field: any, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return { formData, handleChange };
};

export default useForm;
