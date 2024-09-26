import meme from "../assets/meme.svg";
import github from "../assets/github.svg";
const Header = () => {
  return (
    <>
      <div className="h-14 bg-bgColor p-2 flex justify-between px-5 top-0 sticky border-b-2 border-b-hrColor z-10">
        <div className="flex gap-3">
          <img src={meme} alt="" />
          <span className="text-textColor font-titalium mt-2 whitespace-nowrap">
            Abdul Meme Generator
          </span>
        </div>
        <div className="">
          <a href="https://github.com/OlaiwonAbdullahi/Meme-Generator">
            <img src={github} alt="" className="h-10 w-10" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
