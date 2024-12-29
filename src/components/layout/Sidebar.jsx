// src/components/layout/Sidebar.jsx
import PropTypes from 'prop-types';
import { Map, Users, Crown, Compass, Wand2, TestTube, Scroll, Clock } from 'lucide-react';

const categories = {
  overview: {
    title: 'World Overview',
    icon: <Compass className="w-6 h-6" />,
    subcategories: ['introduction', 'timeline', 'current-state']
  },
  geography: {
    title: 'Geography & Climate',
    icon: <Map className="w-6 h-6" />,
    subcategories: ['regions', 'landmarks', 'climate-zones', 'natural-wonders']
  },
  cultures: {
    title: 'Peoples & Cultures',
    icon: <Users className="w-6 h-6" />,
    subcategories: ['major-races', 'cultural-groups', 'languages', 'traditions']
  },
  magic: {
    title: 'Magic & Technology',
    icon: <Wand2 className="w-6 h-6" />,
    subcategories: ['magic-systems', 'artifacts', 'innovation', 'knowledge']
  },
  politics: {
    title: 'Politics & Power',
    icon: <Crown className="w-6 h-6" />,
    subcategories: ['factions', 'alliances', 'conflicts', 'trade']
  },
  sciences: {
    title: 'Sciences & Crafts',
    icon: <TestTube className="w-6 h-6" />,
    subcategories: ['alchemy', 'medicine', 'engineering', 'agriculture']
  },
  history: {
    title: 'History & Lore',
    icon: <Scroll className="w-6 h-6" />,
    subcategories: ['ages', 'major-events', 'legends', 'artifacts']
  },
  time: {
    title: 'Time & Calendar',
    icon: <Clock className="w-6 h-6" />,
    subcategories: ['calendar-system', 'important-dates', 'festivals']
  }
};

const Sidebar = ({ isOpen, setIsOpen, activePage, setActivePage, activeSubsection, setActiveSubsection }) => {
  const handlePageClick = (key) => {
    setActivePage(key);
    // Set the first subsection as active when changing pages
    setActiveSubsection(categories[key].subcategories[0]);
    setIsOpen(false); // Close sidebar on mobile after selection
  };

  const handleSubsectionClick = (subsection) => {
    setActiveSubsection(subsection);
    setIsOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-gray-800 text-white
        transform transition-transform duration-300 ease-in-out
        lg:transform-none lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <nav className="p-4 h-full overflow-y-auto">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => handlePageClick(key)}
                className={`w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-700 ${
                  activePage === key ? 'bg-blue-600' : ''
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
              {activePage === key && (
                <div className="ml-8 mt-2 space-y-1">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubsectionClick(sub)}
                      className={`w-full text-left p-2 text-sm rounded
                        ${activeSubsection === sub 
                          ? 'bg-gray-700 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }`}
                    >
                      {sub.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  activeSubsection: PropTypes.string.isRequired,
  setActiveSubsection: PropTypes.func.isRequired
};

export default Sidebar;