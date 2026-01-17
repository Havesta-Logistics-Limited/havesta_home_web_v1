const Section4 = () => {
    return (
        <>
            <div className="h-[932px] bg-[#000] flex justify-center items-center md:w-full md:h-[989px]">
                <div className="w-[327px] flex justify-center flex-col items-center gap-8 md:w-5/6">
                    <div>
                        <p className="w-full text-[28px] text-center text-white font-career md:text-[50px] md:w-[753px]">
                            Take a look inside the office!
                        </p>
                    </div>
                    <div className="flex-col flex h-[728.93px] w-full gap-4 md:flex-row md:h-[650px]">
                        <div className="flex-col-reverse w-full h-f1/2 flex gap-4 md:w-1/2 md:h-full md:flex-col">
                            <div className="h-2/3 w-full">
                                <img
                                    className="object-cover w-full h-full"
                                    src="/images/Img 1.png"
                                />
                            </div>
                            <div className="h-1/3 w-full flex-row flex gap-4">
                                <div className="w-1/2 h-full">
                                    <img
                                        className="object-cover w-full h-full"
                                        src="/images/Group 4903.png"
                                    />
                                </div>
                                <div className="w-1/2 h-full g-[#fff]">
                                    <img
                                        className="object-cover w-full h-full"
                                        src="/images/Img 3.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex-row flex gap-4 md:h-full md:w-1/2">
                            <div className="w-1/2 h-full flex flex-col gap-4">
                                <div className="h-1/3">
                                    <img
                                        className="object-cover w-full h-full"
                                        src="/images/Group 4904.png"
                                    />
                                </div>
                                <div className="h-2/3">
                                    <img
                                        className="object-cover w-full overflow-clip h-full"
                                        src="/images/Imag 5.png"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex flex-col gap-4">
                                <div className="h-2/3">
                                    <img
                                        className="object-cover overflow-clip w-full h-full"
                                        src="/images/Img 6.png"
                                    />
                                </div>
                                <div className="h-1/3 bg-[#FFFFFF1A] p-5 flex flex-col justify-end items-start">
                                    <p className="text-[17.26px] text-[#fff] md:text-[24px] ">
                                        more
                                    </p>
                                    <img
                                        className="w-[34px] h-[34px] object-contain"
                                        src="/images/Group 3888.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section4;
