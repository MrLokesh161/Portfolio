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
          <h1 className="glow-text" data-text="SERVICES">
            SERVICES
          </h1>
        <div className="flex-1 glow-line mr-[25%] ml-5"></div>
      </div>
      
      {/* Services Cards */}
      <HoverEffect items={services} />

      <style jsx>{`
        .glow-text {
          font-size: 2.2rem;
          font-weight: bold;
          color: transparent;
          -webkit-text-stroke: 1px rgb(173, 216, 230);
          position: relative;
        }
        .glow-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: transparent;
          -webkit-text-stroke: 1px rgb(100, 149, 237);
          text-shadow: 0 0 8px rgba(173, 216, 230, 0.8),
                       0 0 12px rgba(173, 216, 230, 0.5),
                       0 0 16px rgba(173, 216, 230, 0.3);
          z-index: -1;
        }
        .glow-line {
          position: relative;
          height: 2px;
          background-color: rgb(100, 149, 237);
        }
        .glow-line::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgb(173, 216, 230);
          box-shadow: 0 0 10px rgba(173, 216, 230, 0.8),
                      0 0 20px rgba(173, 216, 230, 0.6),
                      0 0 30px rgba(173, 216, 230, 0.4),
                      0 0 40px rgba(173, 216, 230, 0.2);
          opacity: 1;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
