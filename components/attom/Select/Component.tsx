import React, { useId } from "react";
import { SelectProps } from "./interface";
import { cn } from "../../../utils/cn";
import { cva } from "class-variance-authority";

const Component: React.FC<SelectProps> = ({
  options,
  label,
  error,
  className,
  id,
  placeholder,
  containerClassName,
  variant,
  size,
  ...props
}) => {
  const generatedId = useId();
  const selectId = id || `select-${generatedId}`;

  return (
    <div className={cn("relative", containerClassName)}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        // className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        aria-invalid={!!error}
        className={cn(selectVariants({ variant, size }), className)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled={!!props.required} selected>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

const selectVariants = cva("border", {
  variants: {
    variant: {
      auth: "border-clr-my-gray rounded px-4 py-3",
      search:
        "box-border border-clr-my-gray rounded-full pl-6 pr-0  py-2 text-base focus:outline-none focus:ring-2 focus:ring-clr-my-gray focus:border-transparent",
      default:
        "border border-clr-my-gray rounded text-text-primary focus:outline-none focus:ring-2 focus:ring-clr-my-gray focus:border-transparent",
      error: "border-red-500",
      radio: "",
    },
    size: {
      default: "",
      sm: "py-2 px-3",
      md: "py-3 px-4 text-sm",
      lg: "py-4 px-5",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

export default Component;
