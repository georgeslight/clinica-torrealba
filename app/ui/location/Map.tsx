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

      const positionLasCondes: { lat: number; lng: number } = {
        lat: -33.383835699156464,
        lng: -70.53350293489933,
      };

      const center: { lat: number; lng: number } = {
        lat: (positionHuechuraba.lat + positionLasCondes.lat) / 2,
        lng: (positionHuechuraba.lng + positionLasCondes.lng) / 2,
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
      const markerLasCondes = new google.maps.Marker({
        map: map,
        position: positionLasCondes,
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
      markerLasCondes.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/dir//DDS+Odontolog%C3%ADa+by+Doctor+Torrealba+-+Estoril+50,+7591047+Las+Condes,+Regi%C3%B3n+Metropolitana,+Chile/@-33.3840373,-70.5360671,17z/data=!4m17!1m7!3m6!1s0x9662cf6b96daa1bb:0x25f868702a9b250!2sDDS+Odontolog%C3%ADa+by+Doctor+Torrealba!8m2!3d-33.3840418!4d-70.5334922!16s%2Fg%2F11vm60_zms!4m8!1m0!1m5!1m1!1s0x9662cf6b96daa1bb:0x25f868702a9b250!2m2!1d-70.5334922!2d-33.3840418!3e1?entry=ttu",
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
