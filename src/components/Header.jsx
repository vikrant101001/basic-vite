import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Header = ({ renderCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">React Vite Demo App</h1>
          <p className="text-gray-600">Sample API</p>
          <p className="text-sm text-gray-500">Render count: {renderCount}</p>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {theme === 'light' ? '🌙' : '☀️'} {theme}
        </button>
      </div>
    </header>
  );
};