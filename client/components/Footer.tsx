import * as React from 'react';
import { FooterSection } from '../components/FooterSection';
import { footer } from '../data/data';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-[#262626] pt-24 w-full">
      <div className="flex gap-28 justify-center py-16 max-md:flex-col max-md:gap-4">
        {footer.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
      </div>
    </footer>
  );
};
