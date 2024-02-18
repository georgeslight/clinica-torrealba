import Navbar from "@/app/ui/Navbar";
import Main from "@/app/ui/Main";
import TeamSlider from "@/app/ui/TeamSlider";
import Expertise from "@/app/ui/Expertise";
import Contact from "@/app/ui/Contact";
import Footer from "@/app/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <TeamSlider />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
