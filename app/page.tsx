import Main from "@/app/ui/Main";
import TeamSlider from "@/app/ui/TeamSlider";
import Expertise from "@/app/ui/Specialities";
import Contact from "@/app/ui/Contact";
import Booking from "@/app/ui/Booking";

export default function Home() {
  return (
    <main>
      <Main />
      <TeamSlider />
      <Expertise />
      <Booking />
      <Contact />
    </main>
  );
}
