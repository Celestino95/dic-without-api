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
        <h2>Resultados em English</h2>
        {word ? (
          <>
            <p><strong>Palavra:</strong> {word}</p>
            <p><strong>Definição:</strong> {definition}</p>
            <button onClick={toggleFavorite} style={styles.button}>
              {favorites.includes(word) ? "⭐ Remover dos Favoritos" : "☆ Adicionar aos Favoritos"}
            </button>
          </>
        ) : (
          <p>Selecione ou escreva uma palavra para ver os detalhes.</p>
        )}
      </div>
      <div style={{ marginTop: "20px",minHeight: "70px" }}>
        <hr />
        <h2>Resultados em Português</h2>
        {translation ? <p><strong>Tradução:</strong> {translation}</p> : <p>Sem tradução disponível.</p>}
      </div>

      <div>
        <hr />
        <h2>Palavras Favoritas</h2>
        <ul className="linhas">
          {favorites.length > 0 ? (
            favorites.map((fav) => <li key={fav}>{fav}</li>)
          ) : (
            <p>Nenhuma palavra favoritada.</p>
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
