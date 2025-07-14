import React, { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        {...props}
      />
      {children && <span className="ml-2">{children}</span>}
    </label>
  );
}

export default Checkbox;
