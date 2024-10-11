import ortodoncia from "@/public/specialities/ortodoncia.png";
import rehabilitacion from "@/public/specialities/rehabilitacion-oral.png";
import endodocia from "@/public/specialities/endodoncia.png";
import cirugia_oral from "@/public/specialities/cirugia-oral.png";
import periodoncia from "@/public/specialities/implantologia-periodoncia.png";
import estetica from "@/public/specialities/estetica.png";

export const specialities = [
  {
    src: ortodoncia,
    alt: "Ortodoncia imagen",
    description:
      "Logra obtener una sonrisa perfectamente alineada, armoniosa y una mordida funcional.",
    title: "Ortodoncia",
    route: "ortodoncia",
  },
  {
    src: estetica,
    alt: "Medicina estética",
    description:
      "Procedimientos estéticos no invasivos que buscan prevenir y tratar el envejecimiento, además de armonizar el rostro completo.",
    title: "Medicina estética",
    route: "medicina-estetica",
  },
  {
    src: cirugia_oral,
    alt: "Cirugía imagen",
    description:
      "Intervenciones especializadas para abordar una variedad de problemas bucales.",
    title: "Cirugía oral",
    route: "cirujia-oral",
  },
  {
    src: rehabilitacion,
    alt: "Rehabilitación oral imagen",
    description:
      "Tratamientos especializados para restaurar la funcionalidad y estética bucal.",
    title: "Rehabilitación oral",
    route: "rehabilitacion-oral",
  },
  {
    src: endodocia,
    alt: "Endodoncia imagen",
    description:
      "Terapias para dientes dañados por caries, trauma u otras afecciones.",
    title: "Endodoncia",
    route: "endodoncia",
  },
  {
    src: periodoncia,
    alt: "Implantología y periodoncia imagen",
    description:
      "Restauración bucal integral con implantes y cuidado periodontal especializado.",
    title: "Implantología y periodoncia",
    route: "implantalogia-periodoncia",
  },
];
