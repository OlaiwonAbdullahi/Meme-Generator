import React, { useState } from "react";

const Form = () => {
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [meme, setMeme] = useState(null);

  // Fetch a random meme
  const fetchMeme = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    const memes = data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMeme(randomMeme.url);
  };

  // Draw meme image with text on a canvas
  const postMeme = () => {
    if (!meme) return;

    const canvas = document.getElementById("memeCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = meme;

    img.onload = () => {
      // Draw the image
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Add top text
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;

      ctx.strokeText(text0, canvas.width / 2, 40); // Stroke for outline
      ctx.fillText(text0, canvas.width / 2, 40); // Fill color

      // Add bottom text
      ctx.strokeText(text1, canvas.width / 2, canvas.height - 20);
      ctx.fillText(text1, canvas.width / 2, canvas.height - 20);
    };
  };

  return (
    <div className="bg-bgColor py-8 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Top Text Input */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <label
            htmlFor="topText"
            className="text-hrColor text-sm font-medium self-start hidden md:flex ml-20"
          >
            Top Text
          </label>

          <input
            type="text"
            id="topText"
            placeholder="Top Text"
            value={text0}
            onChange={(event) => setText0(event.target.value)}
            className="border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 lg:w-2/3 focus:outline-none placeholder:text-textColor text-sm p-2"
          />
        </div>

        {/* Bottom Text Input */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <label
            htmlFor="bottomText"
            className="text-hrColor text-sm font-medium self-start hidden md:flex ml-20"
          >
            Bottom Text
          </label>

          <input
            type="text"
            id="bottomText"
            placeholder="Bottom Text"
            value={text1}
            onChange={(event) => setText1(event.target.value)}
            className="border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 lg:w-2/3 focus:outline-none placeholder:text-textColor text-sm p-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 gap-4">
        {/* Fetch New Meme Button */}
        <button
          className="h-10 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-textColor bg-bgColor border border-hrColor rounded-lg shadow-xl text-lg font-titalium"
          onClick={fetchMeme}
        >
          Get a new meme image 🖼
        </button>

        {/* Meme Canvas and Add Text Button */}
        {meme && (
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Canvas */}
            <canvas
              id="memeCanvas"
              width="350" // Adjust canvas size for responsiveness
              height="350"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-hrColor"
            ></canvas>

            {/* Add Text Button */}
            <button
              className="h-10 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-textColor bg-bgColor border border-hrColor font-titalium rounded-lg shadow-xl text-lg"
              onClick={postMeme}
            >
              Add Text to Meme
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
