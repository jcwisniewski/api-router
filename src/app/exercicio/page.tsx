"use client";
import AtroposComponent from "@/components/ui/atropos/atroposComponent";
import Header from "@/components/ui/header";

const Exercicio = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen w-screen  justify-center items-center gap-2 ">
        <AtroposComponent>
          <div className="w-[450px] h-[200px] bg-slate-100 p-3 flex-row flex rounded-md">
            <div className="flex flex-col gap-7">
              <div className="flex flex-row">
                <div className="rounded-full w-24 h-24 bg-gray-300">
                  <img
                    className="rounded-full w-full h-full"
                    src="/jordan.png"
                  ></img>
                </div>
                <div className="ml-4 flex flex-col">
                  <div className="flex flex-col  w-40 mt-5">
                    <text className=" font-sans font-bold text-black">
                      Michael Jordan
                    </text>
                  </div>
                  <div className="flex flex-col  w-40 mt-5"></div>
                  <text className="font-sans font-bold text-gray-400">
                    Te mandou um convite!
                  </text>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <button className="bg-blue-700 text-white font-bold rounded-md p-3 transition duration-300 ease-in-out hover:bg-blue-800">
                  Aceitar
                </button>

                <button className="bg-slate-100  text-black transition duration-300 ease-in-out hover:bg-red-600  hover:text-white font-bold rounded-md  p-3">
                  Negar
                </button>
              </div>
            </div>
          </div>
        </AtroposComponent>
      </div>
    </>
  );
};

export default Exercicio;
