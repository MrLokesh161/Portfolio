"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";

const ShimmerButton: React.FC = () => {
  const button = {
    name: "Shimmer",
    description: "Shimmer button for your website",
    component: (
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Shimmer
      </button>
    ),
    code: `
      // Button code
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Shimmer
      </button>

      // tailwind.config.js code
      {
        "animation": {
          shimmer: "shimmer 2s linear infinite"
        },
        "keyframes": {
          shimmer: {
            from: {
              "backgroundPosition": "0 0"
            },
            to: {
              "backgroundPosition": "-200% 0"
            }
          }
        }
      }
    `,
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };

  const handleCopy = () => {
    const buttonString = reactElementToJSXString(button.component);
    copyToClipboard(buttonString);
  };

  return (
    <div className="pb-40 px-4 w-full">
      <Toaster position="top-center" />
      <div className="flex flex-col items-center">
        <div onClick={handleCopy}>
          {button.component}
        </div>
        <p className="mt-2 text-center">{button.description}</p>
      </div>
    </div>
  );
};

export default ShimmerButton;
