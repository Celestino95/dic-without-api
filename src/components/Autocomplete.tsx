import React, { useState, useEffect } from "react";
import wordsData from "../data/words.json";

interface AutocompleteProps {
  searchTerm: string;
  onSelect: (word: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ searchTerm, onSelect }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.length > 1) { 
      fetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const fetchSuggestions = (term: string) => {
    const filteredWords = wordsData
      .filter((entry) => entry.word.toLowerCase().includes(term.toLowerCase()))
      .slice(0, 5)
      .map((entry) => entry.word); 

    setSuggestions(filteredWords);
  };

  return (
    <div style={styles.container}>
      {suggestions.length > 0 && (
        <ul style={styles.list}>
          {suggestions.map((word, index) => (
            <li 
              key={index} 
              style={styles.listItem} 
              onClick={() => onSelect(word)}
            >
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

const styles : {
  container: React.CSSProperties;
  list: React.CSSProperties;
  listItem: React.CSSProperties;
} = {
  container: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 10,
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
    transition: "background 0.2s",
  },
};
