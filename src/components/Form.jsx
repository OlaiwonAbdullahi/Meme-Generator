import React, { useState } from "react";

const Form = () => {
  // Define state using useState hook for top and bottom text
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");

  return (
    <div className="bg-bgColor py-10">
      <div>
        <div className="flex flex-col md:flex-row justify-center mx-auto items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center mx-auto items-center">
            <label
              htmlFor="topText"
              className="text-hrColor text-sm font-medium self-start ml-20 hidden md:flex"
            >
              Top Text
            </label>

            <input
              type="text"
              id="topText"
              placeholder="Top Text"
              value={text0}
              onChange={(event) => setText0(event.target.value)}
              className="border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2 focus:bg-bgColor"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center mx-auto items-center">
            <label
              htmlFor="bottomText"
              className="text-hrColor text-sm font-medium self-start ml-20 hidden md:flex"
            >
              Bottom Text
            </label>

            <input
              type="text"
              id="bottomText"
              placeholder="Bottom Text"
              value={text1}
              onChange={(event) => setText1(event.target.value)} // use setText1 to update state
              className="border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2 focus:bg-bgColor"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="h-10 w-2/3 md:w-2/4 text-textColor bg-bgColor border border-hrColor rounded-lg mt-4 whitespace-nowrap flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative px-4 py-2 overflow-hidden group font-titalium"
            // onClick={handleGetImage} // Attach your function for fetching a meme image here
          >
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
