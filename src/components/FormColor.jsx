import { useState } from "react";
import Values from "values.js";
import { GridColors } from "./GridColors";

export const FormColor = () => {
  const [inputValue, setInputValue] = useState("");
  const [listColors, setListColors] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(inputValue).all(10);
      setListColors(colors);
      setError(false);
      setInputValue("");
    } catch (error) {
      console.error("Error al generar colores:", error);
      setError(true);
      setListColors([]);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text 
               bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
               mb-8 py-2 tracking-tight">
        Color Palette Generator 
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4 items-center"
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter a color: #Hex or Name"
            onChange={handleChange}
            value={inputValue}
            className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-50 focus:outline-none transition-colors shadow-sm placeholder-gray-400`}
            autoFocus
          />
          {error && (
            <h1 className="text-white text-1xl font-bold mt-2 text-center">
              Invalid color. Try a color name or hexadecimal code (e.g., #ff0000)
            </h1>
          )}
        </div>
      </form>
      <div className="mt-12">
        <GridColors listColors={listColors} />
      </div>
    </div>
  );
};
