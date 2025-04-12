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

      const positionHuechuraba: { lat: number; lng: number } = {
        lat: -33.36209088909539,
        lng: -70.67016101323479,
      };

      const positionLaDehesa: { lat: number; lng: number } = {
        lat: -33.36040218278683,
        lng: -70.51559054294788,
      };

      const center: { lat: number; lng: number } = {
        lat: (positionHuechuraba.lat + positionLaDehesa.lat) / 2,
        lng: (positionHuechuraba.lng + positionLaDehesa.lng) / 2,
      };

      //   map options
      const mapOptions: google.maps.MapOptions = {
        center: center,
        zoom: window.innerWidth <= 500 ? 11 : 12,
        mapId: "Clinica Torrealba",
      };

      //   setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //   put marker on map
      const markerHuechuraba = new google.maps.Marker({
        map: map,
        position: positionHuechuraba,
        label: {
          text: "T",
          fontWeight: "bold",
        },
      });
      const markerLaDehesa = new google.maps.Marker({
        map: map,
        position: positionLaDehesa,
        label: {
          text: "T",
          fontWeight: "bold",
        },
      });

      markerHuechuraba.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/dir//Clinica+Torrealba+-+Av.+Pedro+Fontova+6651,+8600578+Huechuraba,+Regi%C3%B3n+Metropolitana,+Chile/@-33.3620955,-70.6727549,17z/data=!4m17!1m7!3m6!1s0x9662c7646f0e3fc5:0xb4de474ee30c38ba!2sClinica+Torrealba!8m2!3d-33.3621!4d-70.67018!16s%2Fg%2F11trmmkz09!4m8!1m0!1m5!1m1!1s0x9662c7646f0e3fc5:0xb4de474ee30c38ba!2m2!1d-70.67018!2d-33.3621!3e1?entry=ttu",
        );
      });
      markerLaDehesa.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/dir//-33.360447,-70.515612/@-33.360447,-70.5168284,19z/data=!4m8!1m5!3m4!2zMzPCsDIxJzM3LjYiUyA3MMKwMzAnNTYuMiJX!8m2!3d-33.360447!4d-70.515612!4m1!3e3?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
        );
      });
    };

    initMap();
  }, []);

  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef} />
    </>
  );
};

export default Map;
