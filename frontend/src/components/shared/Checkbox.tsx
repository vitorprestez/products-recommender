import { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  id: string;
  label: string;
}

function Checkbox({
  children,
  id,
  type = "checkbox",
  checked,
  label,
  ...props
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer select-none "
    >
      <input
        id={id}
        data-testid="checkbox"
        type={type}
        checked={checked}
        className="h-5 w-5 border border-gray-300 rounded"
        aria-checked={
          type === "checkbox" || type === "radio" ? checked : undefined
        }
        {...props}
      />
      {label && <span className="ml-2 text-sm">{label}</span>}
    </label>
  );
}

export default Checkbox;
