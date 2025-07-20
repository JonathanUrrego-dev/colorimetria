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
    {
    id: "spring",
    label: "Primavera",
    colors: [
      { name: "Melón", hex: "#FFD8A9" },
      { name: "Durazno", hex: "#FFBC9A" },
      { name: "Coral", hex: "#FF8882" },
      { name: "Turquesa claro", hex: "#A0E7E5" },
      { name: "Amarillo mantequilla", hex: "#FFFACD" },
    ],
  },
  {
    id: "summer",
    label: "Verano",
    colors: [
      { name: "Lavanda", hex: "#BFA2DB" },
      { name: "Rosa suave", hex: "#F9CEE7" },
      { name: "Azul polvo", hex: "#A3D2CA" },
      { name: "Gris azulado", hex: "#B0C4DE" },
      { name: "Malva", hex: "#D8B4E2" },
    ],
  },
  {
    id: "autumn",
    label: "Otoño",
    colors: [
      { name: "Mostaza", hex: "#D4A373" },
      { name: "Terracota", hex: "#E07A5F" },
      { name: "Oliva", hex: "#A98467" },
      { name: "Marrón", hex: "#7F5539" },
      { name: "Verde musgo", hex: "#588157" },
    ],
  },
  {
    id: "winter",
    label: "Invierno",
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Gris carbón", hex: "#2E2E2E" },
      { name: "Blanco hielo", hex: "#F5F5F5" },
      { name: "Rojo rubí", hex: "#9B111E" },
      { name: "Azul marino", hex: "#0F4C81" },
    ],
  },
];