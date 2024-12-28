import PropTypes from 'prop-types';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-700 rounded lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg md:text-xl font-bold truncate">CODEX</h1>
        </div>
        
        {/* Desktop Search */}
        <div className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <button 
          className="p-2 hover:bg-gray-700 rounded md:hidden"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Toggle search"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default Header;