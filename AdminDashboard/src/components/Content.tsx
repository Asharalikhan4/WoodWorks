import React from 'react';
import { Route, Routes } from 'react-router-dom';

interface ContentProps {
  routes: { path: string; component: React.ReactNode }[];
}

const Content: React.FC<ContentProps> = ({ routes }) => {
  return (
    <div className="flex-1 p-4">
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
};

export default Content;