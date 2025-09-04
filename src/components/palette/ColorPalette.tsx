import type { ColorItem } from "../../types/color.types";
import "./colorPalette.css";

interface ColorPaletteProps {
  colors: ColorItem[];
  onColorSelect: (color: string) => void;
  onAutoChange?: () => void;
}

export const ColorPalette = ({ colors, onColorSelect, onAutoChange }: ColorPaletteProps) => {
  const colorSelected = (hex: string) => {
    onColorSelect(hex);
  };

  return (
    <div className="container-color-palette">
      <h2 className="title-palette">Colores a Seleccionar</h2>
      <div className="palette-buttons">
        {colors.map((color) => (
          <button
            key={color.name}
            className="color-button"
            aria-label={color.name}
            title={color.name}
            style={{ backgroundColor: color.hex }}
            onClick={() => colorSelected(color.hex)}
          ></button>
        ))}
        <button 
          className="auto-button" 
          onClick={onAutoChange}
        >
          ⟳
        </button>
      </div>
    </div>
  );
};
