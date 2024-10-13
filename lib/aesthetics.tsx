import first from "@/public/medicina-estetica/estetica1.png";
import second from "@/public/medicina-estetica/estetica2.png";
import third from "@/public/medicina-estetica/estetica3.png";
import fourth from "@/public/medicina-estetica/estetica4.png";
import fifth from "@/public/medicina-estetica/estetica5.png";
import sixth from "@/public/medicina-estetica/estetica6.png";
import { StaticImageData } from "next/image";

export const aesthetics: {
  name: string;
  // description: string;
  image: { src: StaticImageData; alt: string };
}[] = [
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: first, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: second, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con/brackets de acero inoxidable.",
    image: { src: third, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con/brackets de acero inoxidable.",
    image: { src: fourth, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: fifth, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: sixth, alt: "image alt" },
  },
];
