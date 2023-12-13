type propertiesType = {
  isLoading: boolean;
};

export default function Spinner({ isLoading }: propertiesType) {
  const isHidden = isLoading ? "" : "hidden";

  return (
    <div
      className={`h-2 bg-slate-500  animate-pulse border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ${isHidden}`}
    ></div>
  );
}
