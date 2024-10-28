'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { ChevronRight, Download, Mail } from 'lucide-react';
import Image from 'next/image';


const About = () => {
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 400], [0, -20]);
  const textFade = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <section className="relative bg-black text-white pt-24 pb-[10%] overflow-hidden">
      <motion.div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </motion.div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          style={{ y: contentY }}
        >
          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Image section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group mr-8" // Added margin to the right
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 md:-inset-6">
                <div className="w-full h-full rotate-3 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Main image */}
              <div className="relative">
                <div className="absolute -inset-1">
                  <div className="w-full h-full rotate-3 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 opacity-75"></div>
                </div>
                <Image
                  src="/assets/mine2.jpg"
                  alt="Profile"
                  width={500} // Replace 500 with the actual width of the image
                  height={500} // Replace 500 with the actual height of the image
                  className="relative rounded-lg w-full object-cover shadow-2xl transform transition duration-500 group-hover:scale-[1.02] group-hover:-rotate-1"
                />
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-300"></div>
              </div>
            </motion.div>

            {/* Right side - Content section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section title with gradient */}
              <motion.div style={{ opacity: textFade }} className="space-y-4">
                <h2 className="text-5xl font-bold">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                
                {/* Role title with animated border */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-lg blur"></div>
                  <h3 className="relative bg-black px-4 py-2 rounded-lg text-2xl font-medium text-gray-200">
                    Full Stack Developer
                  </h3>
                </div>
              </motion.div>

              {/* Description with improved typography */}
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed text-justify"
                style={{ opacity: textFade }}
              >
                I am a passionate web developer focused on building interactive and responsive digital solutions. 
                With a keen eye for design and a commitment to user experience, I strive to create websites 
                that not only function well but also delight users.
              </motion.p>

              {/* Skills section */}
              <motion.div 
                className="flex flex-wrap gap-3"
                style={{ opacity: textFade }}
              >
                {['React', 'Next.js', 'TypeScript', 'Nest.js', 'Tailwind'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-6"
                style={{ opacity: textFade }}
              >
                <motion.a
                  href="/path/to/resume.pdf"
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-violet-500/25 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="group flex items-center gap-2 px-6 py-3 border border-violet-500/50 rounded-lg font-semibold text-violet-400 hover:bg-violet-500/10 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
