import { useEffect, useState } from "react";
import wordsData from "../data/words.json";

interface SearchProps {
    word: string;
    setWord: (word: string) => void;
    onSearch: (word: string) => void;
    setFilteredWords: (words: string[]) => void;
  }
  
  export default function Search({ word, setWord, onSearch,setFilteredWords }: SearchProps) {

    useEffect(() => {
      if (word.length > 0) {
        const filtered = wordsData
          .map(w => w.word)
          .filter(w => w.toLowerCase().includes(word.toLowerCase()));
        setFilteredWords(filtered);
      } else {
        setFilteredWords([]);
      }
    }, [word]);

    return (
      <div style={{ display: "flex" }} className="divSearch">
        <input
          type="text"
          className="inputSearch"
          placeholder="Search words..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          style={styles.input}
        />
        <button
          className="btSearch"
          type="button"
          onClick={() => onSearch(word)}
          style={{
            height: "40px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            border: "2px solid #ccc",
            width: "50px",
            backgroundColor: "#dbdbdb",
          }}
        >
          🔍
        </button>
      </div>
    );
  }
  
  const styles = {
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginBottom: "10px",
      fontSize: "16px",
    },
  };
  