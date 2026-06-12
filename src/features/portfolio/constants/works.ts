import work1 from "@/assets/work-1-mascaraoni.jpeg";
import work2 from "@/assets/work-2-angels.jpeg";
import work3 from "@/assets/work-3-newschool-tiger.jpeg";
import work4 from "@/assets/work-4-powerpufgirls.jpeg";
import work5 from "@/assets/work-5-newschool-snake.jpeg";
import work6 from "@/assets/work-6-eagle.jpeg";
import work7 from "@/assets/work-7-leona.jpeg";
import work8 from "@/assets/work-8-fenix.jpeg";
import work9 from "@/assets/work-9-gara.jpeg";
import work10 from "@/assets/work-10-ragnarok.jpeg";
import work11 from "@/assets/work-11-naruto.jpeg";
import work12 from "@/assets/work-12-onepiece.jpeg";
import work14 from "@/assets/work-14-lettering.jpeg";
import work15 from "@/assets/work-15-frezer.jpeg";
import work16 from "@/assets/work-16-colibri.jpeg";
import work17 from "@/assets/work-17-blackandgrey-faces.jpeg";
import work18 from "@/assets/work-18-perrofu.jpeg";

export interface TattooWork {
  image: string;
  title: string;
  tag: string;
}

export const TATTOO_WORKS: TattooWork[] = [
  { image: work1, title: "Hannya & Peonías", tag: "Neotradicional" },
  { image: work2, title: "Ángel & lettering", tag: "Blackwork" },
  { image: work3, title: "Tigre samurái", tag: "Neotradicional" },
  { image: work4, title: "Powerpuff girls", tag: "Anime / Color" },
  { image: work5, title: "Serpiente & daga", tag: "New School" },
  { image: work6, title: "Águila tradicional", tag: "Old School" },
  { image: work7, title: "Leona y cachorros", tag: "Realismo" },
  { image: work8, title: "Fénix renacido", tag: "Color" },
  { image: work9, title: "Gara Shukaku", tag: "Anime" },
  { image: work10, title: "Göll Ragnarok", tag: "Anime" },
  { image: work11, title: "Team 7 Naruto", tag: "Anime" },
  { image: work12, title: "Trafalgar Law", tag: "Anime" },
  { image: work14, title: "Lettering creativa", tag: "Lettering" },
  { image: work15, title: "Frieza completo", tag: "Anime" },
  { image: work16, title: "Colibrí color", tag: "Color" },
  { image: work17, title: "Black & Grey Faces", tag: "Black & Grey" },
  { image: work18, title: "Perro fiel", tag: "Realismo" },
];
