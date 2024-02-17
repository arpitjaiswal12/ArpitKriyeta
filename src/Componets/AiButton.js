import { Tooltip } from "@material-tailwind/react";
import React from "react";

export default function AiButton() {
  return (
    <div>
      <Tooltip content="Generate" className="bg-white text-black border-2">
        <button
          type="button"
          className="border-2 border-gray-400 rounded-lg bg-transparent hover:bg-slate-200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/3058/3058838.png"
            className=" w-12"
            alt="Generate"
          />{" "}
        </button>
      </Tooltip>
    </div>
  );
}
