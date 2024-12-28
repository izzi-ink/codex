import PropTypes from 'prop-types';
import { Map, Users, Crown, Compass, Wand2, TestTube, Scroll, Clock } from 'lucide-react';

// Categories data with icons
const categories = {
  overview: {
    title: 'World Overview',
    icon: <Compass className="w-6 h-6" />,
    subcategories: ['Introduction', 'Timeline', 'Current State']
  },
  geography: {
    title: 'Geography & Climate',
    icon: <Map className="w-6 h-6" />,
    subcategories: ['Regions', 'Landmarks', 'Climate Zones', 'Natural Wonders']
  },
  cultures: {
    title: 'Peoples & Cultures',
    icon: <Users className="w-6 h-6" />,
    subcategories: ['Major Races', 'Cultural Groups', 'Languages', 'Traditions']
  },
  magic: {
    title: 'Magic & Technology',
    icon: <Wand2 className="w-6 h-6" />,
    subcategories: ['Magic Systems', 'Artifacts', 'Innovation', 'Knowledge']
  },
  politics: {
    title: 'Politics & Power',
    icon: <Crown className="w-6 h-6" />,
    subcategories: ['Factions', 'Alliances', 'Conflicts', 'Trade']
  },
  sciences: {
    title: 'Sciences & Crafts',
    icon: <TestTube className="w-6 h-6" />,
    subcategories: ['Alchemy', 'Medicine', 'Engineering', 'Agriculture']
  },
  history: {
    title: 'History & Lore',
    icon: <Scroll className="w-6 h-6" />,
    subcategories: ['Ages', 'Major Events', 'Legends', 'Artifacts']
  },
  time: {
    title: 'Time & Calendar',
    icon: <Clock className="w-6 h-6" />,
    subcategories: ['Calendar System', 'Important Dates', 'Festivals']
  }
};

const Sidebar = ({ isOpen, setIsOpen, activePage, setActivePage }) => {
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
                onClick={() => {
                  setActivePage(key);
                  setIsOpen(false);
                }}
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
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                    >
                      {sub}
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
  setActivePage: PropTypes.func.isRequired
};

export default Sidebar;