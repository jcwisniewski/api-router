"use client";

import React, { useState } from "react";
import Header from "@/components/ui/header";
import Image from "next/image";
import Spinner from "@/components/ui/spinner";

type responseType = {
  response: {
    slip: {
      slip_id: string;
      advice: string;
    };
  };
};

export default function Advice() {
  const [advice, setAdvice] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAdvice() {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log("data", data);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Request error to advice");
    }
    setIsLoading(false);
  }
  return (
    <>
      <Header />
      <div className="flex h-screen w-screen  justify-center items-center flex-col gap-2">
        <button
          className="bg-action-green rounded-button w-button h-button font-button text-button"
          onClick={() => handleAdvice()}
        >
          Conselho do dia
        </button>
        <text className={`${isLoading ? "hidden" : ""} `}>{advice}</text>
        <Spinner isLoading={isLoading} />
      </div>
    </>
  );
}
