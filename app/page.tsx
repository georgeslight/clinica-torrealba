import Main from "@/app/ui/Main";
import TeamSlider from "@/app/ui/TeamSlider";
import Expertise from "@/app/ui/Specialities";
import Contact from "@/app/ui/Contact";
import Booking from "@/app/ui/Booking";
import Partners from "@/app/ui/PartnersSlider";

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
