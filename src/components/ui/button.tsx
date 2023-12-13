type ButtonTypes = {
  name: string;
  isActive: boolean;
};

export default function Button({ name, isActive }: ButtonTypes) {
  const active = isActive
    ? "bg-action-green rounded-button  hover:bg-green-400 w-button h-button font-button text-button"
    : "rounded-button w-button h-button font-button text-button hover:border-gray-200 text-blue-500 hover:bg-gray-200 ";
  return (
    <>
      <button className={`${active}`}>{name}</button>
    </>
  );
}
