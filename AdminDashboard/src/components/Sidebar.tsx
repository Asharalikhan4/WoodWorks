import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  links: { label: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const location = useLocation();

  return (
    <div className="hidden lg:block lg:w-64 bg-gray-800 h-screen">
      <div className="flex flex-col p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded-md text-white ${
              location.pathname === link.path ? 'bg-gray-700' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;