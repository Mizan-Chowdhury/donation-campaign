import "./banner.css";
const Banner = () => {
  const imgUrl = "url(/public/image/Rectangle-4281.png)";
  return (
    <div
      style={{ backgroundImage: imgUrl }}
      className="banner-container bg-contain bg-no-repeat bg-center h-[80vh]"
    >
      <div className="bg-white bg-opacity-90 h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          I Grow By Helping People In Need
        </h1>
        <div>
          <input
            className="border p-2 rounded w-80 lg:w-[500px]"
            type="text"
            placeholder="Search here...."
          />
          <button className="absolute -ml-[88px] p-2 lg:mt-[1px] px-5 bg-[#FF444A] rounded-r text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
