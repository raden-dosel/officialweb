"use client";
import HoverBackButton from "@components/seasonal-output/Back_Button";
import TextArea from "@components/text-input/TextArea";
import { useRouter } from "next/navigation";
import useModelStore from "@store/modelStore";

import React from "react";

const TextInputPage = () => {
  const router = useRouter();
  const { resetSubTypes} = useModelStore();

  const handleBackClick = () => {
    router.push("/");
    resetSubTypes();
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex items-center justify-center px-4 py-12">
      <TextArea className="relative z-10" />
      <HoverBackButton
        onClick={handleBackClick}
        buttonWidth="w-20"
        hoverBgColor="hover:bg-pink-600"
        bgColor="bg-pink-500"
      />
    </div>
  );
};

export default TextInputPage;
