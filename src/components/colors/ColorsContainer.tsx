import { useState } from "react";
import { ColorPalette } from "../palette/ColorPalette";
import "./colors.css";
import { colorPalettes } from "../../utils/colorPalettes";

export const ColorsContainer = () => {
    const [ bgColor, setBgColor ] = useState<string>("rgb(80, 79, 80)");
    const [ selectedPaletteId , setSelectedPaletteId ] = useState("warm")

    const activePalette = colorPalettes.find(p => p.id === selectedPaletteId)!;

    return (
        <div className="container-colors"
            style={{ backgroundColor: bgColor }}
        >
            <p>Colorimetría</p>
                <div style={{ marginBottom: "1rem" }}>
                    {colorPalettes.map((palette) => (
                        <button
                            key={palette.id}
                            onClick={() => setSelectedPaletteId(palette.id)}
                            style={{
                                margin: "0.3rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: "#eee",
                                border: "1px solid #ccc",
                                borderRadius: "0.3rem",
                                cursor: "pointer",
                                fontWeight: selectedPaletteId === palette.id ? "bold" : "normal",
                            }}
                        >
                            {palette.label}
                        </button>
                    ))}
                </div>
            <ColorPalette colors={activePalette.colors} onColorSelect = {setBgColor}/>
        </div>
    )
}