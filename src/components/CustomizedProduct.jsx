const CustomizedProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-secondary text-secondary rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="text-white bg-secondary ring-1 ring-secondary  rounded-md py-1 px-4 text-sm cursor-pointer">
          Meduim
        </li>
        <li className="ring-1 ring-secondary text-white rounded-md py-1 px-4 text-sm cursor-not-allowed bg-secondary opacity-50">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizedProduct;
