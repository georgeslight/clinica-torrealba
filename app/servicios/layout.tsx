import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1280px] h-full w-full mx-auto">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
