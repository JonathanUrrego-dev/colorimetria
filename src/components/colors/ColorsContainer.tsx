import { useState } from "react";
import { ColorPalette } from "../palette/ColorPalette";
import "./colors.css";
import { colorPalettes } from "../../utils/colorPalettes";
import { BurgerButton } from "../burguerbutton/BurguerButton";

export const ColorsContainer = () => {
  const [bgColor, setBgColor] = useState<string>("rgb(80, 79, 80)");
  const [selectedPaletteId, setSelectedPaletteId] = useState("warm");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activePalette = colorPalettes.find((p) => p.id === selectedPaletteId)!;

  return (
    <div>
      <BurgerButton isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />

      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <h3>Paletas de color</h3>
        <div className="palette-buttons">
            {colorPalettes.map((palette) => (
<button
  key={palette.id}
  onClick={() => setSelectedPaletteId(palette.id)}
  className={`palette-button ${selectedPaletteId === palette.id ? "selected" : ""}`}
>
  {palette.label}
</button>

            ))}
         </div>
        </div>
      <div
        className="container-colors"
        style={{ backgroundColor: bgColor }}
      >
        <ColorPalette colors={activePalette.colors} onColorSelect={setBgColor} />
      </div>
    </div>
  );
};
