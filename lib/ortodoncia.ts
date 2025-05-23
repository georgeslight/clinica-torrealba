import metal_braces from "@/public/ortodoncia/metalicos.png";
import ceramic_braces from "@/public/ortodoncia/ceramics.png";
import aligners from "@/public/ortodoncia/alineadores.png";
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
