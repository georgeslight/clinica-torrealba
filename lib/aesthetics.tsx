import first from "@/public/medicina-estetica/estetica1.png";
import firstPc from "@/public/medicina-estetica/estetica-pc1.png";
import second from "@/public/medicina-estetica/estetica2.png";
import secondPc from "@/public/medicina-estetica/estetica-pc2.png";
import third from "@/public/medicina-estetica/estetica3.png";
import thirdPc from "@/public/medicina-estetica/estetica-pc3.png";
import fourth from "@/public/medicina-estetica/estetica4.png";
import fourthPc from "@/public/medicina-estetica/estetica-pc4.png";
import fifth from "@/public/medicina-estetica/estetica5.png";
import fifthPc from "@/public/medicina-estetica/estetica-pc5.png";
import sixth from "@/public/medicina-estetica/estetica6.png";
import sixthPc from "@/public/medicina-estetica/estetica-pc6.png";
import { StaticImageData } from "next/image";

export const aesthetics: {
  name: string;
  // description: string;
  image: { src: StaticImageData; alt: string };
  imageMobile: { src: StaticImageData; alt: string };
}[] = [
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: first, alt: "image alt" },
    imageMobile: { src: firstPc, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: second, alt: "image alt" },
    imageMobile: { src: secondPc, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con/brackets de acero inoxidable.",
    image: { src: third, alt: "image alt" },
    imageMobile: { src: thirdPc, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con/brackets de acero inoxidable.",
    image: { src: fourth, alt: "image alt" },
    imageMobile: { src: fourthPc, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: fifth, alt: "image alt" },
    imageMobile: { src: fifthPc, alt: "image alt" },
  },
  {
    name: "",
    // description: "Realizado con brackets de acero inoxidable.",
    image: { src: sixth, alt: "image alt" },
    imageMobile: { src: sixthPc, alt: "image alt" },
  },
];
