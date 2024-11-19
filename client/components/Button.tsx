// src/components/Button.tsx
import { ButtonProps } from '../interfaces/types';

export const Button = ({ children, variant = 'outline', className = '' }: ButtonProps) => {
  return (
    <button 
      className={`gap-2.5 px-5 py-2.5 rounded-3xl border-lime-400 border-solid border-[0.5px] ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};
