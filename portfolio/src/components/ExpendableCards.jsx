"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import driveImg from "../assets/projects/drive.png";
import courseImg from "../assets/projects/course.png";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

return (
    <>
        <AnimatePresence>
            {active && typeof active === "object" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10" />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <div className="fixed inset-0  grid place-items-center z-[100]">
                    <motion.button
                        key={`button-${active.title}-${id}`}
                        layout
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.05,
                            },
                        }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                        onClick={() => setActive(null)}>
                        <CloseIcon />
                    </motion.button>
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                        <motion.div layoutId={`image-${active.title}-${id}`}>
                            <img
                                width={200}
                                height={200}
                                src={active.src}
                                alt={active.title}
                                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain" />
                        </motion.div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-start p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-base">
                                        {active.description}
                                    </motion.p>
                                </div>

                                <motion.a
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    href={active.ctaLink}
                                    target="_blank"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#1e1e1e] text-white">
                                    {active.ctaText}
                                </motion.a>
                            </div>
                            <div className="pt-4 relative px-4 flex-1">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] max-h-[300px]">
                                    {typeof active.content === "function"
                                        ? active.content()
                                        : active.content}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
        <ul
            className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
            {cards.map((card, index) => (
                <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    key={card.title}
                    onClick={() => setActive(card)}
                    className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                    <div className="flex gap-4 flex-col w-full">
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <img
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-60 w-full  rounded-lg object-contain" />
                        </motion.div>
                        <div className="flex justify-center items-center flex-col">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </ul>
    </>
);
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Express js",
    title: "Drive Express Mini Project",
    src: driveImg,
    ctaText: "Visit",
    ctaLink: "https://drive-express-mini-project.vercel.app",
    content: () => {
      return (
        <p>This Drive Express Mini Project is a streamlined, full-stack web application that emulates the core functionality of Google Drive. Built with Node.js, Express, MongoDB, and Firebase Storage, it enables users to securely register, log in, upload, and download files through a modern, responsive interface. The backend leverages JWT-based authentication and bcrypt password hashing to ensure user security, while file uploads are efficiently managed and stored in Firebase with metadata tracked in MongoDB.<br /><br />
        The project demonstrates my ability to integrate multiple technologies and services to deliver a cohesive user experience. It features robust input validation, secure file access via signed URLs, and a clean UI powered by Tailwind CSS and Flowbite. This application highlights my skills in backend development, authentication, cloud storage integration, and building user-centric web solutions with a focus on security and usability.
                  </p>
      );
    },
  },
  {
    description: "Next.js",
    title: "Music Course Website",
    src: courseImg,
    ctaText: "Visit",
    ctaLink: "https://next-js-aceternity-ui-ten.vercel.app/",
    content: () => {
    return (
      <div>
        <p>
        This project is a modern music education platform built with Next.js, React, and Tailwind CSS, featuring a visually engaging and interactive user experience. <br /><br />
            This project demonstrates advanced skills in modern web development, UI/UX design, and the integration of open-source UI libraries like Aceternity UI. It is an excellent showcase of building scalable, maintainable, and visually compelling web applications.
        </p>
      </div>
    );
    },
  },
];
