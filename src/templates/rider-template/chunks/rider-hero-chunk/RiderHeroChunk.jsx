export default function RiderHeroChunk() {
  return (
    <div className="relative pb-5">
      <div className="w-full bg-cover  py-20 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822845/Group_1000002050_isyw0e.png')]">
        {/* HERO SECTION */}
        <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative lg:ml-44">
          <div className=" p-2">
            <h2 className="p-3 text-[50px] font-primary font-bold lg:leading-tight lg:text-[55px] text-[#242424] text-6xl">
              Become a Delivery <br />
              <span className="text-white font-[700]">AGENT </span>with Havesta
            </h2>
            <p className=" p-3  text-[#242424] font-primary">
              Be your Boss. Build your income daily, weekly, or monthly.
            </p>
            {/*  <button className="mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] ml-2">
                  Get Started
                </button> */}
          </div>
          <div className="lg:absolute right-52">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527279/Ellipse_69_3_yhglfw.svg"
              alt=""
              className="w-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
