"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const getStarted = () => {
    router.push("/cloth");
  };
  return (
    <footer className="py-16 bg-gray-900 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Ready to Try It On?
      </h2>
      <p className="mb-4">1. Take or Upload a selfie of your face.</p>
      <p className="mb-4">
        2. Enter styling preference regarding your clothes.
      </p>
      <p className="mb-10">3. Wait for the results then voila.</p>
      <div className="flex flex-col items-center gap-6 mb-6">
        <svg width="15" height="15">
          <circle cx="7.5" cy="7.5" r="7.5" fill="gray" />
        </svg>
        <svg width="15" height="15">
          <circle cx="7.5" cy="7.5" r="7.5" fill="gray" />
        </svg>
        <svg width="15" height="15">
          <circle cx="7.5" cy="7.5" r="7.5" fill="gray" />
        </svg>
      </div>
      <button
        onClick={getStarted}
        className="px-8 py-3 text-primary-foreground font-semibold rounded-full shadow-lg bg-primary hover:bg-secondary"
      >
        Start Now
      </button>
    </footer>
  );
};

export default Footer;
