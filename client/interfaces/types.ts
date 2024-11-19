export interface NavItemProps {
    text: string;
    isActive?: boolean;
  }
  
  export interface FooterLinkProps {
    title: string;
    links: string[];
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'outline' | 'solid';
    className?: string;
  }