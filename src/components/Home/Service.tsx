// Service.tsx
'use client';

import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

// Define the type for the service object
interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

// Define the services array with the ServiceItem type
export const services: ServiceItem[] = [
  {
    title: "UI/UX Design",
    description: "Creating user-centered designs to enhance user satisfaction and accessibility.",
    link: "https://example.com/ui-ux-design",
  },
  {
    title: "Web Design",
    description: "Crafting visually appealing and responsive designs tailored for web interfaces.",
    link: "https://example.com/web-design",
  },
  {
    title: "Web Development",
    description: "Developing robust and scalable web applications tailored to your business needs.",
    link: "https://example.com/web-development",
  },
  {
    title: "Mobile Application Development",
    description: "Building intuitive and high-performance mobile applications for iOS and Android.",
    link: "https://example.com/mobile-app-development",
  },
  {
    title: "Software Development",
    description: "Offering end-to-end software solutions, from ideation to deployment.",
    link: "https://example.com/software-development",
  },
  {
    title: "AI/ML Automations",
    description: "Implementing AI and ML solutions to automate tasks and improve operational efficiency.",
    link: "https://example.com/ai-ml-automations",
  },
];

export function Service() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center justify-center my-8">
        <div className="flex-1 glow-line ml-[25%] mr-5"></div>
          <h1 className="glow-text" data-text="TECH SPECIALTIES">
            SERVICES
          </h1>
        <div className="flex-1 glow-line mr-[25%] ml-5"></div>
      </div>
      
      {/* Services Cards */}
      <HoverEffect items={services} />
    </div>
  );
}
