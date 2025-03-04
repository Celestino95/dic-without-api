import { useState, useEffect } from "react";

interface WordDefinitionProps {
  word: string;
  definition: string;
  translation: string;
}

export default function ResultsWords({ word, definition, translation }: WordDefinitionProps) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = () => {
    if (!word) return;
    setFavorites((prev) =>
      prev.includes(word) ? prev.filter((fav) => fav !== word) : [...prev, word]
    );
};

  return (
    <div className="wordDefinition" style={{ color: "#515151", padding: "10px"}}>
      <div style={{minHeight:"170px"}}>
        <h2>Results in English</h2>
        {word ? (
          <>
            <p><strong>Word:</strong> {word}</p>
            <p><strong>Definition:</strong> {definition}</p>
            <button onClick={toggleFavorite} style={styles.button}>
              {favorites.includes(word) ? "⭐" : "☆"}
            </button>
          </>
        ) : (
          <p>Select or write a word to see the details</p>
        )}
      </div>
      <div style={{ marginTop: "20px",minHeight: "70px" }}>
        <hr />
        <h2>Results in Portugues</h2>
        {translation ? <p><strong>Translation:</strong> {translation}</p> : <p>Without available translation.</p>}
      </div>

      <div>
        <hr />
        <h2>Favorite words</h2>
        <ul className="linhas">
          {favorites.length > 0 ? (
            favorites.map((fav) => <li key={fav}>{fav}</li>)
          ) : (
            <p>Any favorite word.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  button: {
    marginTop: "10px",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid #ccc",
    backgroundColor: "#f4f4f4",
  },
};
