"use client";
import PrivacyNotice from "@components/guidelines/PrivacyNotice";
import UploadGuidelines from "@components/guidelines/UploadGuidelines";
import HoverBackButton from "@components/seasonal-output/Back_Button";
import React from "react";


const Home = () => {
  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-gradient-to-b from-pink-50/50 to-white min-h-screen">
        <UploadGuidelines/>
        <PrivacyNotice/>
        <HoverBackButton
        onClick={handleBackClick}
        buttonWidth="w-20"
        hoverBgColor="hover:bg-pink-600"
        bgColor="bg-pink-500"
      />
    </div>
  );
};

export default Home;
