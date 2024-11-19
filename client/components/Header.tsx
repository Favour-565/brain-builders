import * as React from 'react';
import { NavItem } from '../components/NavItem';
import { Button } from '../components/Button';
import { navItems } from '../data/data';

export const Header = () => {
  return (
    <header className="flex z-10 pr-20 text-base text-center max-md:pr-5">
      <div className="flex flex-col grow shrink-0 justify-center py-2.5 mr-0 basis-0 w-fit max-md:max-w-full">
        <nav className="flex flex-wrap gap-5 justify-between px-20 py-2.5 w-full bg-white max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44bff3180bf3bb3475993403bb377444d3b1d3085e5bcd529c0d36e65480d30?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
            alt="Company Logo"
            className="object-contain shrink-0 w-36 max-w-full aspect-[3.27]"
          />
          <div className="flex gap-5 my-auto font-bold max-md:max-w-full">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
          <div className="flex gap-6 items-center self-start font-black text-black h-[42px]">
            <div className="flex gap-2 justify-between items-center self-stretch my-auto min-w-[240px] w-[262px]">
              <Button className="w-[84px]">Login</Button>
              <Button className="w-[170px]">Sign-up for Free</Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
