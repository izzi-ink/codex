// src/components/features/map/WorldMap.jsx
import PropTypes from 'prop-types';

const WorldMap = ({ mapUrl }) => {
  // Get the full URL of your map including the base URL
  const fullUrl = window.location.origin + mapUrl;
  const encodedUrl = encodeURIComponent(fullUrl);
  const azgaarViewerUrl = `https://azgaar.github.io/Fantasy-Map-Generator/index.html?maplink=${encodedUrl}`;

  console.log('Map URL:', fullUrl); // For debugging
  console.log('Encoded URL:', azgaarViewerUrl); // For debugging

  return (
    <div className="w-full h-[800px] border rounded-lg overflow-hidden bg-gray-50">
      <iframe
        src={azgaarViewerUrl}
        title="Fantasy World Map"
        className="w-full h-full"
        style={{ border: 'none' }}
        sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-downloads"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

WorldMap.propTypes = {
  mapUrl: PropTypes.string.isRequired
};

export default WorldMap;