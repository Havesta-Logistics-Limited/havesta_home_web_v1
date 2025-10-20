export default function HomeDownloadChunk() {
  return (
    <section className="  grid grid-flow-col justify-items-around items-center box-border mx-[120px]">
      <div className="grid grid-flow-row justify-items-end">
        <div className="grid grid-flow-row justify-items-center">
          <img src="/icons/arrow.svg" alt="harvesta" className="w-[200px]" />

          <h2 className="text-3xl font-bold font-primary">Download Our App</h2>
          <p className="text-[15px] text-center text-wrap w-[400px]">
            Get fresh farm produce delivered in minutes from a variety of
            trusted vendors offering fruits, veggies, tubers, grains, and nuts.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
              alt="first_img"
              width={120}
            />
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
              alt="second_img"
              width={120}
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-flow-row justify-items-start p-0 ">
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823608/Group_1000001793_qvhqd7.png"
          alt=""
          className="w-[600px]"
        />
      </div>
    </section>
  );
}
