import Photo from "./Photo";
import Title from "./Title";
import HeaderRight from "./HeaderRight";
const Header = () => {
  return (
    <>
     
      <div className="relative flex place-content-center items-center  h-84 bg-gray-100">
        <Title />
        <Photo />
        


{/* 
        <div className="flex flex-col place-content-center">
          <div className="flex flex-col bg-slate-200 rounded-full border border-gray-900 h-60 w-60 p-2">
            <Photo />
          </div>
          <h2 className="p-3 m-2 text-slate-600 text-xl font-black">
            Clearhope Counseling & Wellness
          </h2>
        </div> */}
      </div>
    </>
  );
};

export default Header;
