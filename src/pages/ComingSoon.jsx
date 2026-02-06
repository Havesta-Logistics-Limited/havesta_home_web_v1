import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="w-full relative h-screen bg-soon bg-cover bg-center lg:bg-top-right flex items-center justify-center">
      <div className="w-full h-full flex-col bg-[#00000066] flex items-center justify-center text-white">
        <h1 className="font-soon lg:text-[100px] text-[50px] leading-[87.8px] lg:leading-[175.6px] font-normal text-center">
          Coming Soon
        </h1>
        <p className="font-primary lg:text-[32px] lg:leading-[38.73px] text-[16px] leading-[19.365px] font-normal text-center mt-4">
          Our mobile app is on the way. Stay tuned for updates!
        </p>
        <Link
          to="/"
          className="mt-8 px-6 py-3 bg-harvestaYellow text-harvestaBlack rounded-3xl font-bold hover:bg-yellow-500 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
