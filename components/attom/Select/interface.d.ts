interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ label: string; value: string | number }>;
  label?: string;
  error?: string;
  placeholder?: string;
  containerClassName?: string;
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'auth' | 'search';
}

export type { SelectProps };