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

const Footer = () => {
  return (
    <footer className="px-4 py-16 md:p-8 lg:p-10 text-center border-y-[1px] border-gray-500 mx-auto max-w-[90%]">
      <div className="mx-auto pb-16 max-w-screen-xl text-center">
        {/*<a*/}
        {/*  href="#"*/}
        {/*  className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"*/}
        {/*>*/}
        {/*  /!* Icon goes here *!/*/}
        {/*  <span>Flowbite</span>*/}
        {/*</a>*/}
        {/*<p className="my-6 text-gray-500 dark:text-gray-400">*/}
        {/*  Open-source library of over 400+ web ui and interactive*/}
        {/*  elements built for better web.*/}
        {/*</p>*/}
        {/*<ul className="flex flex-wrap justify-center items-center p-4">*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      About*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      Blog*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      Jobs*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      Press*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      Accessibility*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href=""*/}
        {/*      className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"*/}
        {/*    >*/}
        {/*      Partners*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
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
