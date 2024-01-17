"use client";
import Header from "@/components/ui/header";
import { useState } from "react";

const Calc = () => {
  const [result, setResult] = useState<any>("0");
  const [number, setNumber] = useState<any>("");
  const [expression, setExpression] = useState<any>("");
  const [firstExpression, setFirstExpression] = useState<any>("");
  const [secondNumber, setSecondNumber] = useState<any>();

  const addNumber = (number: any) => {
    if (result === "0") {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };

  const sumNumber = (x: any, y: any) => {
    let result = parseInt(x) + parseInt(y);
    setResult(result);
  };
  const xNumber = (x: any, y: any) => {
    let result = parseInt(x) * parseInt(y);
    setResult(result);
  };
  const lessNumber = (x: any, y: any) => {
    let result = parseInt(x) - parseInt(y);
    setResult(result);
  };
  const divNumber = (x: any, y: any) => {
    let result = parseInt(x) / parseInt(y);
    setResult(result);
  };

  const validateFirstExpression = (expression: any, firstNumber: any) => {
    setFirstExpression(expression);
    setNumber(firstNumber);
    setResult("0");
    if (number > 0) {
      switch (expression) {
        case "+":
          sumNumber(firstNumber, number);
        case "-":
          lessNumber(firstNumber, number);
        case "/":
          divNumber(firstNumber, number);
        case "*":
          xNumber(firstNumber, number);
      }
    }
    console.log(number, expression);
  };

  const validateShow = () => {
    return divExpression ? "" : "hidden";
  };
  const secondExpression = (secondNumber: any) => {
    console.log("expression", firstExpression);
    switch (firstExpression) {
      case "+":
        sumNumber(secondNumber, number);
      case "-":
        lessNumber(secondNumber, number);
      case "/":
        divNumber(secondNumber, number);
      case "*":
        xNumber(secondNumber, number);
    }
  };

  const divExpression = number + " " + firstExpression;
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grow grid grid-cols-4 pt-20 gap-4 sm:p-20">
          <div
            className={`${validateShow()} col-span-full text-lg block font-bold p-5 bg-black rounded-md text-white`}
          >
            {divExpression}
          </div>
          <div className="col-span-full text-lg block font-bold p-5 bg-white rounded-md text-black">
            {result}
          </div>
          <button className="p-3 rounded-md bg-blue-700 hover:bg-blue-200">
            %
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => {
              setNumber(0);
              setFirstExpression("");
            }}
          >
            CE
          </button>
          <button className="p-3 rounded-md bg-blue-700 hover:bg-blue-200">
            C
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => setResult("0")}
          >
            backspace
          </button>
          <button className="p-3 rounded-md bg-blue-700 hover:bg-blue-200">
            outro
          </button>
          <button className="p-3 rounded-md bg-blue-700 hover:bg-blue-200">
            x2
          </button>
          <button className="p-3 rounded-md bg-blue-700 hover:bg-blue-200">
            otacoisa
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => validateFirstExpression("/", result)}
          >
            /
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("7")}
          >
            7
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("8")}
          >
            8
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("9")}
          >
            9
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => validateFirstExpression("*", result)}
          >
            X
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("4")}
          >
            4
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("5")}
          >
            5
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("6")}
          >
            6
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => validateFirstExpression("-", result)}
          >
            -
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("1")}
          >
            1
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("2")}
          >
            2
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("3")}
          >
            3
          </button>
          <button
            className="p-3 rounded-md bg-blue-700 hover:bg-blue-200"
            onClick={() => validateFirstExpression("+", result)}
          >
            +
          </button>
          <button className="p-3 rounded-md  bg-blue-500 hover:bg-blue-200">
            +/-
          </button>
          <button
            className="p-3 rounded-md bg-blue-500 hover:bg-blue-200"
            onClickCapture={() => addNumber("0")}
          >
            0
          </button>
          <button className="  p-3 rounded-md bg-blue-500 hover:bg-blue-200">
            .
          </button>
          <button
            className="p-3 rounded-md bg-orange-500 hover:bg-orange-700"
            onClick={() => secondExpression(result)}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calc;
