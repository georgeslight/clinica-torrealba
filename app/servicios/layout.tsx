import React from "react";
import Booking from "@/app/ui/Booking";
import Contact from "@/app/ui/Contact";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pt-20">
      <div className="h-full w-full mx-auto">
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </div>
      <Booking />
      <Contact />
    </div>
  );
}
