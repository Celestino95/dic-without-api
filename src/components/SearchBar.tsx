import { useState, useEffect } from "react";
import wordsData from "../data/words.json";
import Autocomplete from "./Autocomplete";

interface SearchProps {
    word: string;
    setWord: (word: string) => void;
    onSearch: (word: string) => void;
    setFilteredWords: (words: string[]) => void;
}

export default function Search({ word, setWord, onSearch, setFilteredWords }: SearchProps) {
    const [showSuggestions, setShowSuggestions] = useState(false);

    /*
    useEffect(() => {
        if (word.length > 0) {
            const filtered = wordsData
                .map(w => w.word)
                .filter(w => w.toLowerCase().includes(word.toLowerCase()));
            setFilteredWords(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setFilteredWords([]);
            setShowSuggestions(false);
        }
    }, [word]); */

    return (
        <div style={{ position: "relative", width: "100%",display: "flex" }} className="divSearch">
            <input
                type="text"
                className="inputSearch"
                placeholder="Search words..."
                value={word}
                onChange={(e) => {
                    setWord(e.target.value);
                    setShowSuggestions(true);
                }}
                style={styles.input}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
                onFocus={() => setShowSuggestions(true)}
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
            <div style={{marginTop: "40px", position: "absolute", width: "85%"}}>
                {showSuggestions && <Autocomplete searchTerm={word} onSelect={(word) => {
                    setWord(word);
                    setShowSuggestions(false);
                    onSearch(word);
                }} />}
            </div>
            
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
