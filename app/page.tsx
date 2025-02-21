import Booking from "@/app/ui/Booking";
import Contact from "@/app/ui/Contact";
import Main from "@/app/ui/Main";
import Partners from "@/app/ui/PartnersSlider";
import Expertise from "@/app/ui/Specialities";
import TeamSlider from "@/app/ui/TeamSlider";

export default function Home() {
  return (
    <main>
      <Main />
      <TeamSlider />
      <Expertise />
      <Partners />
      <Booking />
      <Contact />
    </main>
  );
}
