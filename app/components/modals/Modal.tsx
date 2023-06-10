"use client";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const Modal: React.FC = () => {
  return (
    <div className="w-full h-full bg-neutral-800/70 fixed z-50  flex items-center justify-center">
      <div className="bg-white h-[90%] lg:h-auto md:h-auto w-[90%] md:w-4/6 lg:w-3/6 xl:w-2/5 rounded-lg shadow-lg">
        {/* Modal top */}
        <div className="p-6 border-b-[1px] flex items-center justify-center text-center relative">
          <div className="p-1 border-0  hover:opacity-70 transition absolute left-9">
            <IoMdClose size={18} />
          </div>
          <div className="text-lg font-semibold">Hello world</div>
        </div>
        {/* body */}
        <div className="relative p-6 flex-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quod
          cupiditate atque labore minima officiis odit est mollitia quo
          reiciendis.
        </div>
        {/* footer */}
        <div className="flex flex-col gap-2 p-6">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Modal;
