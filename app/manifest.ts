import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clínica Dental Torrealba",
    short_name: "Clínica Dental Torrealba",
    description:
      "En Clínica Dental Torrealba, ofrecemos una amplia gama de servicios especializados " +
      "para cuidar tu salud bucal. Contamos con expertos en cirugía oral, endodoncia, implantología y periodoncia, " +
      "quienes utilizan las técnicas más avanzadas para garantizar tratamientos efectivos y seguros. Además, brindamos" +
      " servicios de ortodoncia para corregir maloclusiones y alinear tu sonrisa, así como rehabilitación oral para " +
      "restaurar la funcionalidad y estética dental. También somos especialistas en medicina estética, ayudando a " +
      "realzar tu belleza facial de manera armónica. Nuestro equipo multidisciplinario está comprometido con brindar " +
      "atención personalizada y de alta calidad en un ambiente cómodo y moderno.",
    start_url: "/",
    display: "standalone",
    background_color: "#ecf0f3",
    theme_color: "#ecf0f3",
    icons: [
      {
        src: "/icon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
