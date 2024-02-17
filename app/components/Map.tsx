"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init marker
      const { Marker } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

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
      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <div id="map" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto w-full h-full justify-center">
        <h2 className="tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
          ¡NUESTRO EQUIPO TE ESPERA!
        </h2>
        <div style={{ height: "600px" }} ref={mapRef} />
      </div>
    </div>
  );
};

export default Map;
