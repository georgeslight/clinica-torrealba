"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { white } from "next/dist/lib/picocolors";
import { FaLocationDot } from "react-icons/fa6";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position: { lat: number; lng: number } = {
        lat: -33.36209088909539,
        lng: -70.67016101323479,
      };

      //   map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "Clinica Torrealba",
      };

      //   setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //   put marker on map
      const marker = new google.maps.Marker({
        map: map,
        position: position,
        label: {
          text: "T",
          fontWeight: "bold",
        },
      });

      marker.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/dir//Clinica+Torrealba+-+Av.+Pedro+Fontova+6651,+8600578+Huechuraba,+Regi%C3%B3n+Metropolitana,+Chile/@-33.3620955,-70.6727549,17z/data=!4m17!1m7!3m6!1s0x9662c7646f0e3fc5:0xb4de474ee30c38ba!2sClinica+Torrealba!8m2!3d-33.3621!4d-70.67018!16s%2Fg%2F11trmmkz09!4m8!1m0!1m5!1m1!1s0x9662c7646f0e3fc5:0xb4de474ee30c38ba!2m2!1d-70.67018!2d-33.3621!3e1?entry=ttu",
        );
      });
    };

    initMap();
  }, []);

  return (
    <div id="map" className="w-full py-16 relative">
      <div className="max-w-[1240px] mx-auto w-full h-full justify-center pt-16">
        <h2 className="tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
          ¡NUESTRO EQUIPO TE ESPERA!
        </h2>
        <div style={{ height: "600px" }} ref={mapRef} />
      </div>
    </div>
  );
};

export default Map;
