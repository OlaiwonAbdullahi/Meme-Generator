import memeData from "../memeData.jsx";

const Form = () => {
  let url;
  function handleGetImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;
    console.log(url);
  }
  return (
    <div className=" bg-bgColor  py-10">
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
              className=" border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium  placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2 focus:bg-bgColor"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center mx-auto items-center">
            <label
              htmlFor="butomText"
              className="text-hrColor text-sm font-medium self-start ml-20 hidden md:flex"
            >
              Bottom Text
            </label>

            <input
              type="text"
              id="butomText"
              placeholder="Bottom Text"
              className=" border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2 focus:bg-bgColor"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="h-10 w-2/3 md:w-2/4 text-textColor bg-bgColor border border-hrColor rounded-lg mt-4 whitespace-nowrap     flex justify-center gap-2 items-center mx-auto shadow-xl text-lg  backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative  px-4 py-2 overflow-hidden group font-titalium"
            onClick={handleGetImage}
          >
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
