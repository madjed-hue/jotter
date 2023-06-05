"use client";

import { useRouter } from "next/navigation";
import { FaSlideshare } from "react-icons/fa";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-red-500 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <FaSlideshare size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
