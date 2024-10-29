"use client";

import React, { useState, useEffect } from "react";
import HeroObj from "./Heroobj";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

const roles = ["{Web Developer}", "{Web Designer}", "{UI/UX Designer}"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setIsFadingOut(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex w-full h-screen mt-24 items-center justify-between px-6 overflow-hidden bg-black relative">
      {/* Enhanced Background Elements */}

      <BackgroundBeamsWithCollision className="opacity-60">
        <div className="flex w-full h-full">
          {/* Left Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[40%] flex flex-col justify-center items-start px-4 py-16 ml-[10%] relative"
          >
            {/* Decorative line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-violet-500 via-purple-500 to-blue-500 rounded-full"></div>

            <motion.h1 
              className="text-5xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Hello, I&apos;m Lokesh
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl font-bold text-white mb-4 leading-tight"
            >
              I&apos;m{" "}
              <span
                className={`bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animated-role ${
                  isFadingOut ? 'fade-out' : 'fade-in'
                }`}
                style={{ transition: 'opacity 1s ease-in-out' }}
              >
                {roles[currentRole]}
              </span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Bringing visions to life through design and technology. I&apos;m passionate about crafting digital experiences that are innovative, visually engaging, and optimized for seamless user interactions.
            </motion.p>
          
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-6 mb-8"
            >
              {[
                { icon: IconBrandGithub, href: "https://github.com/your-profile", color: "group-hover:text-violet-400" },
                { icon: IconBrandLinkedin, href: "https://linkedin.com/in/your-profile", color: "group-hover:text-blue-400" },
                { icon: IconBrandMedium, href: "https://medium.com/@your-profile", color: "group-hover:text-purple-400" },
                { icon: IconMail, href: "mailto:lokesh07084@gmail.com", color: "group-hover:text-blue-400" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2 rounded-lg hover:bg-white/10 transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className={`h-8 w-8 text-white transition-colors duration-300 ${item.color}`} />
                </motion.a>
              ))}
            </motion.div>
          
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-6"
            >
              <div className="flex space-x-4">
              <a
  href="/contact"
  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  style={{
    animation: "shimmer 5s linear infinite",
    backgroundSize: "200% 100%",
    fontFamily: "var(--font-worksans)",
  }}
>
  Get in Touch
</a>
<a
  href="/projects"
  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  style={{
    animation: "shimmer 4s linear infinite",
    backgroundSize: "200% 100%",
    fontFamily: "var(--font-worksans)",
  }}
>
  See My Works
</a>
          </div>
            </motion.div>
          </motion.div>

          {/* Hero Object Section */}
          <motion.div 
          className="w-[60%] h-[80%] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroObj />
        </motion.div>
        </div>
      </BackgroundBeamsWithCollision>

     <style jsx global>{`
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;