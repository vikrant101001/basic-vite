import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { NameInput } from './components/NameInput';
import { Counter } from './components/Counter';


const App = () => {
  const [theme, setTheme] = useState('light');
  


  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  

  const themeContextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900 text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="max-w-4xl mx-auto p-6">

          
          <div className="grid gap-8">
            <Header/>
            <NameInput />
            <Counter />
         
          </div>
          
          <footer className="mt-12 text-center text-gray-500">
            <p>Built with React + Vite | Demonstrating modern React patterns</p>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;