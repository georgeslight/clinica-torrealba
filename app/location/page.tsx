import Navbar from "@/app/ui/Navbar";
import Map from "@/app/ui/ubicacion/Map";
import Contact from "@/app/ui/Contact";
import Footer from "@/app/Footer";

export default function Location() {
  return (
    <main>
      <Navbar />
      <Map />
      <Contact />
      <Footer />
    </main>
  );
}
