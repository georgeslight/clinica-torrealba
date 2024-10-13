import * as React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { convenios } from "@/lib/convenios";

const Footer = () => {
  return (
    <footer className="px-4 py-16 md:p-8 lg:p-10 text-center border-y-[1px] border-gray-500 mx-auto max-w-[90%]">
      <div className="mx-auto pb-16 max-w-screen-xl text-center">
        <span className="flex justify-center items-center tracking-widest uppercase text-lg font-semibold text-gray-500">
          Convenios
        </span>
        <ul className="flex flex-wrap justify-center items-center p-4 leading-relaxed">
          <li>
            <Link
              href={convenios[0].url}
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex items-center justify-center h-auto w-full rounded-xl group">
                <Image
                  className="rounded-md relative max-w-36 object-scale-down py-1"
                  src={convenios[0].src}
                  alt={convenios[0].alt}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={convenios[1].url}
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md relative max-w-36 object-scale-down py-1"
                src={convenios[1].src}
                alt={convenios[1].alt}
              />
            </Link>
          </li>
          <li>
            <Link
              href={convenios[2].url}
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md relative max-w-36 object-scale-down py-1"
                src={convenios[2].src}
                alt={convenios[2].alt}
              />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Dent
            </Link>
          </li>
          <li>
            <Link
              href={convenios[4].url}
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md relative max-w-36 object-scale-down py-1"
                src={convenios[4].src}
                alt={convenios[4].alt}
              />
            </Link>
          </li>
          <li>
            <Link
              href={convenios[5].url}
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md relative max-w-36 object-scale-down py-1"
                src={convenios[5].src}
                alt={convenios[5].alt}
              />
            </Link>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center items-center p-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61552994867158"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/clinicatorrealba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </a>
          </li>
          <li>
            <a
              href="mailto:clinicadentaltorrealba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegCalendarAlt className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </a>
          </li>
          <li>
            <Link href="/ubicacion">
              <TbMapSearch className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center p-4">
          © 2024 Clinica Dental Torrealba. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
