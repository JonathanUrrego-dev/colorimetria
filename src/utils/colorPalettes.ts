import type { ColorPalette } from "../types/color.types";

export const colorPalettes: ColorPalette[] = [
      {
    id: "warm",
    label: "Colores Cálidos",
    colors: [
      { name: "Amarillo", hex: "#facc15" },
      { name: "Naranja", hex: "#f97316" },
      { name: "Rojo", hex: "#ef4444" },
    ],
  },
  {
    id: "cool",
    label: "Colores Fríos",
    colors: [
      { name: "Azul", hex: "#3b82f6" },
      { name: "Cian", hex: "#06b6d4" },
      { name: "Verde", hex: "#10b981" },
    ],
  },
  {
    id: "rainbow",
    label: "Arcoíris",
    colors: [
      { name: "Rojo", hex: "#ef4444" },
      { name: "Naranja", hex: "#f97316" },
      { name: "Amarillo", hex: "#facc15" },
      { name: "Verde", hex: "#22c55e" },
      { name: "Azul", hex: "#3b82f6" },
      { name: "Indigo", hex: "#6366f1" },
      { name: "Violeta", hex: "#a855f7" },
    ],
  },
];