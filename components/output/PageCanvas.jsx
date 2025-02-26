"use client";
import React from "react";
import ModelCanvas from "./ModelCanvas";
import { useDressStore } from "@store/dress-store";

const PageCanvas = () => {
  const { currentDressIndex, dress, incrementDress, decrementDress, randomDress } =
    useDressStore();
  const currentDress = dress[currentDressIndex];

  console.log(currentDress);

  return (
    <div>
      <ModelCanvas
        url={currentDress}
        scale={1}
        nextIndex={incrementDress}
        previousIndex={decrementDress}
        randomIndex={randomDress}
      />
    </div>
  );
};

export default PageCanvas;
