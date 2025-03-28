import { useState } from "react";

export const GridColors = ({ listColors }) => {
  const [copiedHex, setCopiedHex] = useState(null);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(`#${hex}`);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 900);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
      {listColors.map((color) => (
        <div
          key={color.hex}
          className="aspect-square rounded-xl shadow-xl overflow-hidden 
                     cursor-pointer transform hover:scale-105 transition-transform
                     relative bg-gray-800"
          onClick={() => copyToClipboard(color.hex)}
        >
          {copiedHex === color.hex && (
            <div className="absolute inset-0 flex items-center justify-center
                          bg-black bg-opacity-50 z-10 text-white
                          animate-fade-in-out">
              <span className="bg-gray-900 px-3 py-1 rounded-full text-sm
                             shadow-lg">
                ¡Copiado!
              </span>
            </div>
          )}
          <div
            className="w-full h-3/4 shadow-inner"
            style={{ backgroundColor: `#${color.hex}` }}
          />
          <div className="p-3 flex justify-center">
            <p className="text-sm font-mono text-gray-300 hover:text-white
                         transition-colors">
              #{color.hex}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
