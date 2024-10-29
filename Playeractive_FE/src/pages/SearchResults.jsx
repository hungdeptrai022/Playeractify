import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSpotifyToken } from '../playeractifyService';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const token = await getSpotifyToken(); // function to retrieve Spotify token
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setResults(data.tracks.items);
      };
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.map((track) => (
        <div key={track.id}>
          <img src={track.album.images[0]?.url} alt={`${track.name} album cover`} width={50} />
          <p>{track.name} by {track.artists[0].name}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
