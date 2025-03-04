import { useEffect,useState } from "react";
import Search from "./SearchBar";
import wordsData from "../data/words.json";

interface SidebarProps {
  selectedWord: string;
  setSelectedWord: (word: string) => void;
  onSearch: (word: string) => void;
}

export default function SiderBar({ selectedWord, setSelectedWord, onSearch }: SidebarProps) {
  
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [filteredWords, setFilteredWords] = useState<string[]>([]);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

   

  return (
    <div >
      <aside style={styles.sidebar} className="sideBar">
        <Search word={selectedWord} setWord={setSelectedWord} onSearch={onSearch} setFilteredWords={setFilteredWords}/>
        <select className="select" multiple={!isMobile ? true : undefined} style={styles.select} onChange={(e) => onSearch(e.target.value)}>
            <option disabled>Choose a word</option>
            {(/* filteredWords.length > 0 ? filteredWords :*/ wordsData.map(w => w.word)).map((word) => (
                <option key={word} value={word}>{word}</option>
             ))}
        </select>
      </aside>
    </div>
  );
}

const styles :{sidebar: React.CSSProperties,select: React.CSSProperties} = {
  sidebar: {
    position: "fixed",
    left: "0",
    top: "60px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  select: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    
  },
};
