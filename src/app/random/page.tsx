"use client";
import React, { useState } from "react";
import Header from "@/components/ui/header";
import Stories from "react-insta-stories";
import { formatarCEPInput } from "@/utils/utils";
import Spinner from "@/components/ui/spinner";
import { Island_Moments } from "next/font/google";
import { setTimeout } from "timers";

type dataCepType = {
  cep: string;
  bairro: string;
  complemento: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  uf: string;
  erro: boolean;
};

const stories = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
];

export default function Random() {
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState<dataCepType>();
  const [errorCep, setErrorCep] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatarCEPInput(event.target.value));
  };

  async function handleCep(cep: string) {
    try {
      setIsLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log(data.erro);
      if (data?.erro) {
        setErrorCep("Cep invalido");
      } else {
        setDataCep(data);
        setErrorCep("");
      }
    } catch (error) {
      console.log("erro");
    }
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col h-screen w-screen justify-center items-center gap-5">
        <input
          onChange={handleInputChange}
          value={cep}
          className="bg-input rounded-input w-input h-input font-input text-black pl-4"
        ></input>
        <button
          onClick={() => {
            handleCep(cep.replace("-", ""));
          }}
          className="text-white bg-action-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <div
            className={`${
              !isLoading
                ? "hidden"
                : "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3"
            } `}
          ></div>
          Pesquisar CEP
        </button>

        <div className={`${!dataCep ? "hidden" : "flex flex-col gap-2"}`}>
          <text className={`${isLoading ? "hidden" : ""}`}>
            Bairro: {dataCep?.bairro}
          </text>
          <text className={`${isLoading ? "hidden" : ""}`}>
            Complemento: {dataCep?.complemento}
          </text>
          <text className={`${isLoading ? "hidden" : ""}`}>
            Rua: {dataCep?.logradouro}
          </text>
          <text className={`${isLoading ? "hidden" : ""}`}>
            CEP: {dataCep?.cep}
          </text>
          <text className={`${isLoading ? "hidden" : ""}`}>
            Cidade: {dataCep?.localidade}
          </text>
          <text className={`${isLoading ? "hidden" : ""}`}>
            Estado: {dataCep?.uf}
          </text>
        </div>
        <div className={`${!errorCep ? "hidden" : "flex flex-col gap-2"}`}>
          <text>{errorCep}</text>
        </div>
      </div>
    </>
  );
}
