export interface ColorItem {
    name: string;
    hex: string;
}

export interface ColorPalette {
    id: string;
    label: string;
    colors: ColorItem[];
}