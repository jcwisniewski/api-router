"use client";
import React, { useState } from "react";
import Header from "@/components/ui/header";
import Spinner from "@/components/ui/spinner";

type responseType = {
  response: {
    slip: {
      slip_id: string;
      advice: string;
    };
  };
};

export default function Chuck() {
  const [joke, setJoke] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleJoke() {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      // console.log("data", );
      setJoke(data.value);
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
          onClick={() => handleJoke()}
        >
          Chuck Norris Joke
        </button>
        <text className={`${isLoading ? "hidden" : ""} `}>{joke}</text>
        <Spinner isLoading={isLoading} />
      </div>
    </>
  );
}
