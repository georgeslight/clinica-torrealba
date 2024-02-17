import Navbar from "@/app/components/Navbar";
import Main from "@/app/components/Main";
import TeamSlider from "@/app/components/TeamSlider";
import Expertise from "@/app/components/Expertise";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

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
