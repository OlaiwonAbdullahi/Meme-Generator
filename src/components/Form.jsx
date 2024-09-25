const Form = () => {
  return (
    <div className=" bg-bgColor  py-10">
      <form action="">
        <div className="flex flex-col md:flex-row justify-center mx-auto items-center">
          <div className="w-1/2 flex flex-col justify-center mx-auto items-center">
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
              className=" border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium  placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center mx-auto items-center">
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
              className=" border border-hrColor bg-bgColor mb-4 rounded-lg h-10 w-full md:w-3/4 focus:outline-none placeholder:text-textColor placeholder:font-titalium placeholder:font-medium placeholder:text-sm text-sm text-textColor font-titalium font-medium p-2"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="h-10 w-2/4 text-textColor bg-bgColor border border-hrColor rounded-lg mt-4 whitespace-nowrap">
            Get a new meme image 🖼
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
