export interface TattooStyle {
  name: string;
  description: string;
}

export const TATTOO_STYLES: TattooStyle[] = [
  { name: "Blackwork", description: "Tinta negra densa, líneas firmes." },
  { name: "Realismo", description: "Retratos y detalle fotográfico." },
  { name: "Neotradicional", description: "Color saturado y contornos audaces." },
  { name: "Lettering", description: "Tipografía personalizada con carácter." },
  { name: "Anime", description: "Personajes y escenas de anime y manga." },
];
