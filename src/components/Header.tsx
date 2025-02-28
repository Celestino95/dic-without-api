import React from "react";

export default function Header() {
    return (
        <div className="Header" style={styles.header}>
            <div style={styles.container}>
                <h1 style={styles.title}>📖 Dictionary SOCOMPSER</h1>
                <img style={styles.img} src="composer.png" alt="Logo" className="img" />
            </div>
        </div>
    );
}

const styles: { 
    header: React.CSSProperties;
    container: React.CSSProperties;
    title: React.CSSProperties;
    img: React.CSSProperties;
} = {
    header: {
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ec8b47",
        color: "#fff",
        padding: "10px 20px",
        borderBottom: "4px solid #515151",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, 
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        margin: 0,
    },
    img: {
        height: "40px",
        width: "auto",
        border: "2px solid #515151",
    },
};
