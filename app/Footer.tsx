import * as React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";

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
        <ul className="flex flex-wrap justify-center items-center p-4">
          <li>
            <a
              href="#home"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              Press
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              Accessibility
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="m-4 hover:text-gray-700 md:mr-6 text-gray-500"
            >
              Partners
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center items-center p-4">
          <li>
            <FaFacebook className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
          </li>
          <li>
            <FaInstagram className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
          </li>
          <li>
            <FaWhatsapp className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
          </li>
          <li>
            <IoIosMail className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
          </li>
          <li>
            <FaRegCalendarAlt className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
          </li>
          <li>
            <TbMapSearch className="m-4 hover:text-gray-600 md:mr-6 text-gray-400 size-5" />
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
