import { useState } from "react";
import SiderBar from "./SiderBar";
import WordDefinition from "./ResultsWords";
import wordsData from "../data/words.json";

export default function Body() {
  const [selectedWord, setSelectedWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [translation, setTranslation] = useState("");

  // Função para buscar os detalhes da palavra
  const fetchWordDetails = (word: string) => {
    const wordInfo = wordsData.find((w) => w.word.toLowerCase() === word.toLowerCase());
    if (wordInfo) {
      setSelectedWord(wordInfo.word);
      setDefinition(wordInfo.definition);
      setTranslation(wordInfo.translation);
    } else {
      setSelectedWord(word);
      setDefinition("Palavra não encontrada.");
      setTranslation("");
    }
  };

  return (
    <div className="desktop">
      <SiderBar selectedWord={selectedWord} setSelectedWord={setSelectedWord} onSearch={fetchWordDetails} />
      <WordDefinition word={selectedWord} definition={definition} translation={translation} />
    </div>
  );
}
