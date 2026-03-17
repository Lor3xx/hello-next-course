import React from 'react';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2 bg-white">
        
        <Link href="/">
          <NavItem label="Home" />
        </Link>
        <Link href="/catalog">
          <NavItem label="Catalog" />
        </Link>
        <Link href="/contact">
          <NavItem label="Contact" />
        </Link>
        
    </nav>
  )
};

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div>
      <div className="text-2xl cursor-pointer"> {props.label} </div>
    </div>
  )
}