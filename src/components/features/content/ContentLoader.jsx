// src/components/features/content/ContentLoader.jsx
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ContentLoader = ({ section, subsection }) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        // Construct the path to your markdown file
        const response = await fetch(`/content/${section}/${subsection}.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to load content for ${section}/${subsection}`);
        }
        
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err.message);
        setContent('');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [section, subsection]);

  if (isLoading) {
    return (
      <div className="animate-pulse p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
        <p className="text-yellow-700">
          Content not available: {error}
        </p>
      </div>
    );
  }

  return (
    <article className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

ContentLoader.propTypes = {
  section: PropTypes.string.isRequired,
  subsection: PropTypes.string.isRequired
};

export default ContentLoader;