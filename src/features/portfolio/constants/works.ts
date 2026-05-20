import work1 from "@/assets/work-1.jpeg";
import work2 from "@/assets/work-2.jpeg";
import work3 from "@/assets/work-3.jpeg";
import work4 from "@/assets/work-4.jpeg";
import work5 from "@/assets/work-5.jpeg";
import work6 from "@/assets/work-6.jpeg";
import work7 from "@/assets/work-7.jpeg";
import work8 from "@/assets/work-8.jpeg";
import work9 from "@/assets/work-9-gara.jpeg";
import work10 from "@/assets/work-10-ragnarok.jpeg";
import work11 from "@/assets/work-11-naruto.jpeg";
import work12 from "@/assets/work-12-onepiece.jpeg";
import work13 from "@/assets/work-13-pikachu.jpeg";

export interface TattooWork {
  image: string;
  title: string;
  tag: string;
}

export const TATTOO_WORKS: TattooWork[] = [
  { image: work1, title: "Hannya & Peonías", tag: "Neotradicional" },
  { image: work8, title: "Fénix renacido", tag: "Color" },
  { image: work3, title: "Tigre samurái", tag: "Neotradicional" },
  { image: work2, title: "Ángel & lettering", tag: "Blackwork" },
  { image: work7, title: "Leona y cachorros", tag: "Realismo" },
  { image: work4, title: "Powerpuff girls", tag: "Anime / Color" },
  { image: work6, title: "Águila tradicional", tag: "Old School" },
  { image: work5, title: "Serpiente & daga", tag: "New School" },
  { image: work9, title: "Gara Shukaku", tag: "Anime" },
  { image: work10, title: "Göll Ragnarok", tag: "Anime" },
  { image: work11, title: "Team 7 Naruto", tag: "Anime" },
  { image: work12, title: "Trafalgar Law", tag: "Anime" },
  { image: work13, title: "Pikachu", tag: "Anime" },
];
