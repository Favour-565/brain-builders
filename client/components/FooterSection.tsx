// src/components/FooterSection.tsx
import { FooterLinkProps } from '../interfaces/types';

export const FooterSection = ({ title, links }: FooterLinkProps) => {
  return (
    <div className="flex flex-col w-[152px]">
      <h3 className="font-black">{title}</h3>
      <nav className="flex flex-col mt-3 w-full">
        {links.map((link, index) => (
          <a 
            href="#" 
            key={index}
            className={index > 0 ? "mt-3" : ""}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
