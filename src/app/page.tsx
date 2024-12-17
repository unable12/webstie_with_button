"use client"
import { useState } from "react";

const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const [buttonColor, setButtonColor] = useState<string>("#FFFFFF");

  const changeColor = () => {
    setButtonColor(getRandomColor());
  };

  return (
    <div
      style={{
        backgroundColor: "#333333",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={changeColor}
        style={{
          backgroundColor: buttonColor,
          color: "#000",
          padding: "15px 30px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;