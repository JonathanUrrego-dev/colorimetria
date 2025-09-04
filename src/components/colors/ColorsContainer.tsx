import { useEffect, useRef, useState } from "react";
import { ColorPalette } from "../palette/ColorPalette";
import "./colors.css";
import { colorPalettes } from "../../utils/colorPalettes";
import { BurgerButton } from "../burguerbutton/BurguerButton";

export const ColorsContainer = () => {
  const [bgColor, setBgColor] = useState<string>("rgb(80, 79, 80)");
  const [selectedPaletteId, setSelectedPaletteId] = useState("warm");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaletteVisible, setIsPaletteVisible] = useState(true);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const activePalette = colorPalettes.find((p) => p.id === selectedPaletteId)!;

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const colorIndex = useRef<number>(0);

  const startHideTimer = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setIsPaletteVisible(false);
    }, 3000);
  };

  const handleColorSelect = (color: string) => {
    setBgColor(color);
    setIsPaletteVisible(true);
    setIsAutoMode(false);
    if (autoTimer.current) clearInterval(autoTimer.current);
    startHideTimer();
  };

  const handleAutoChange = () => {
    if (isAutoMode) {
      setIsAutoMode(false);
      if (autoTimer.current) clearInterval(autoTimer.current);
    } else {
      setIsAutoMode(true);
      colorIndex.current = 0;
      autoTimer.current = setInterval(() => {
        setBgColor(activePalette.colors[colorIndex.current].hex);
         if (colorIndex.current >= activePalette.colors.length - 1) {
        if (autoTimer.current) clearInterval(autoTimer.current);
        setIsAutoMode(false);
      } else {
        colorIndex.current++;
      }
    }, 3000); 
  }
};

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsPaletteVisible(true);
        startHideTimer();
      }
    };

    const handleGlobalClick = () => {
      setIsPaletteVisible(true);
      startHideTimer();
    };

    startHideTimer();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (autoTimer.current) clearInterval(autoTimer.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsPaletteVisible(true);
      startHideTimer();
    }
  }, [isMenuOpen]);

  return (
    <div>
      <BurgerButton
        isOpen={isMenuOpen}
        toggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <h3>Paletas de color</h3>
        <div className="palette-buttons">
          {colorPalettes.map((palette) => (
            <button
              key={palette.id}
              onClick={() => setSelectedPaletteId(palette.id)}
              className={`palette-button ${
                selectedPaletteId === palette.id ? "selected" : ""
              }`}
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
        {isPaletteVisible && (
          <ColorPalette
            colors={activePalette.colors}
            onColorSelect={handleColorSelect}
            onAutoChange={handleAutoChange}
          />
        )}
      </div>
    </div>
  );
};
