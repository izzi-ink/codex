// src/App.jsx
import { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import WorldMap from './components/features/map/WorldMap';
import ContentLoader from './components/features/content/ContentLoader';
import './styles/index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('overview');
  const [activeSubsection, setActiveSubsection] = useState('introduction');

  // Local map file path
  const mapUrl = '/assets/maps/kyrkon-world.map';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          activePage={activePage}
          setActivePage={setActivePage}
          activeSubsection={activeSubsection}
          setActiveSubsection={setActiveSubsection}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {activePage === 'overview' ? 'World Overview' : 'Content Area'}
              </h2>
              
              {activePage === 'overview' ? (
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">World Map</h3>
                    <WorldMap mapUrl={mapUrl} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <ContentLoader 
                        section="overview" 
                        subsection="introduction"
                      />
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">Recent Updates</h3>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-600">No updates yet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <ContentLoader 
                    section={activePage}
                    subsection={activeSubsection}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <p className="text-sm">CODEX - Last Updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default App;