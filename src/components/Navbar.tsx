"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "./ui/navbar-menu";
import Image from 'next/image';

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-40 ", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between p-1 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/assets/logo1.png" 
              alt="Logo" 
              width={100} 
              height={88} 
              className="h-12" 
            />
          </div>

          {/* Centered Menu Items */}
          <div className="flex space-x-10 font-bold" style={{ fontFamily: "var(--font-worksans)" }}>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Work", path: "/work" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" }
            ].map(({ name, path }) => (
              <a
                key={name}
                href={path}
                className="relative inline-block text-black dark:text-white group transition duration-300 ease-in-out"
              >
                <span className="relative z-10 block transition duration-200">{name}</span>
                <span className="absolute left-0 right-0 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 transform group-hover:scale-x-100 bottom-0" />
              </a>
            ))}
          </div>

          {/* "Get in Touch" Button */}
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-4 ring-1 ring-white/10">
              <span>Get in Touch</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </Menu>
    </div>
  );
}
