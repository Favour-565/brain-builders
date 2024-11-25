// src/components/NavItem.tsx
import { NavItemProps } from '../interfaces/types';

export const NavItem = ({ text, isActive }: NavItemProps) => {
  return (
    <div className={`basis-auto ${isActive ? 'text-orange-500' : 'text-teal-600'}`}>
      {text}
    </div>
  );
};
