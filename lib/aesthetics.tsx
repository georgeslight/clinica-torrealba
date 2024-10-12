import test from "@/public/medicina-estetica/test.png";
import { StaticImageData } from "next/image";

export const aesthetics: {
  name: string;
  description: string;
  image: { src: StaticImageData; alt: string };
}[] = [
  {
    name: "Ortodoncia convencional metálica",
    description: "Realizado con brackets de acero inoxidable.",
    image: { src: test, alt: "image alt" },
  },
  {
    name: "Ortodoncia convencional metálica",
    description: "Realizado con brackets de acero inoxidable.",
    image: { src: test, alt: "image alt" },
  },
  {
    name: "Ortodoncia convencional metálica",
    description: "Realizado con brackets de acero inoxidable.",
    image: { src: test, alt: "image alt" },
  },
  {
    name: "Ortodoncia convencional metálica",
    description: "Realizado con brackets de acero inoxidable.",
    image: { src: test, alt: "image alt" },
  },
];
