// src/components/features/map/WorldMap.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

const WorldMap = ({ mapUrl }) => {
  const [loadError, setLoadError] = useState(false);
  
  // Build the Azgaar viewer URL with the full, absolute URL to your map
  const fullMapUrl = new URL(mapUrl, window.location.origin).href;
  const azgaarViewerUrl = `https://azgaar.github.io/Fantasy-Map-Generator/index.html?maplink=${encodeURIComponent(fullMapUrl)}`;

  const handleError = () => {
    setLoadError(true);
    console.error('Failed to load map:', fullMapUrl);
  };

  return (
    <div className="w-full h-[800px] border rounded-lg overflow-hidden bg-gray-50">
      {loadError ? (
        <div className="flex items-center justify-center h-full text-red-500">
          <p>Error loading map. Please check the console for details.</p>
        </div>
      ) : (
        <iframe
          src={azgaarViewerUrl}
          title="Fantasy World Map"
          className="w-full h-full"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-downloads"
          loading="lazy"
          allowFullScreen
          onError={handleError}
        />
      )}
    </div>
  );
};

WorldMap.propTypes = {
  mapUrl: PropTypes.string.isRequired
};

export default WorldMap;