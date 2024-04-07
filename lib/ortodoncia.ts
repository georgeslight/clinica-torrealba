import ortodoncia_tradicional from "@/public/ortodoncia/papada-l.jpg";
import metal_braces from "@/public/ortodoncia/braces_glasses_1920.jpg";
import ceramic_braces from "@/public/ortodoncia/Ceramic-Braces.jpg";
import aligners from "@/public/ortodoncia/aligners.jpg";
import { StaticImageData } from "next/image";

export const ortodoncia: {
  name: string;
  description: string;
  image: { src: StaticImageData; alt: string };
}[] = [
  {
    name: "Ortodoncia convencional metálica",
    description: "Realizado con brackets de acero inoxidable.",
    image: { src: metal_braces, alt: "image alt" },
  },
  {
    name: "Ortodoncia convencional cerámica",
    description:
      "Realizado con brackets de cerámica que son más estéticos y menos visibles, ya que su color es similar al de los dientes.",
    image: { src: ceramic_braces, alt: "image alt" },
  },
  {
    name: "Alineadores",
    description:
      "Es el tratamiento más moderno para lograr la alineación dental. Consiste en placas transparentes, removibles y estéticas, que ejercen las fuerzas hasta lograr la posición deseada.",
    image: { src: aligners, alt: "image alt" },
  },
];
