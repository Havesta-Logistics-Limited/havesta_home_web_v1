const Section6 = () => {
  const data = [
    {
      title: "Find a role that suits you",
      body: "Discover open positions and find your desired one in the Havesta website,  job listings or social media.",
    },
    {
      title: "Send your application",
      body: "Some simple questions should be answered and your contact information is required ",
    },
    {
      title: "Receive your interview invite",
      body: "We review all applications within 3 working days and send invitation to candidates.",
    },
    {
      title: "Choose an interview slot",
      body: "You will have a friendly discution with the CEO and your  supervisor to talk about the work, life and etc.",
    },
    {
      title: "Preliminary Interview",
      body: "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
    },
    {
      title: "Meet the your teammates",
      body: "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.",
    },
    {
      title: "Interview with our CEO",
      body: "Your colleagues are waiting for you to say a warm welcome.",
    },
    { title: "Start a new journey!", body: "" },
  ];

  return (
    <>
      <div className="flex justify-center items-start w-full h-fit bg-careerGradient2 bg-contain bg-no-repeat md:bg-careerGradient md:items-center">
        <div className="py-[250px] w-[327px] flex flex-col justify-center items-center gap-8 md:w-5/6">
          <div className="w-full md:flex md:flex-col md:items-center">
            <p className="text-start text-[28px] font-career w-full md:text-center md:text-[50px]">
              How to become an Havestar?
            </p>
            <p className="text-left text-[#090808] w-full md:text-center md:w-[972px]">
              Joining us couldn&apos;t be easier! Check out our application
              process down below. If you have the talent we need, then
              we&apos;ll be meeting you soon!
            </p>
          </div>
          <div className="relative flex flex-col gap-8 w-full h-fit">
            <div className="absolute lg:left-1/2 left-[25px] w-[6px] h-full bg-[#E6EBF2] z-10 -translate-x-1/2"></div>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`z-20 flex w-full h-full ${
                    index % 2 == 0 ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div
                    className={`lg:w-size w-full h-fit flex gap-[2rem] ${
                      index % 2 == 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="w-[50px] h-[50px] border-[#01BE72] border-[4px] bg-white drop-shadow-custom rounded-[100%] justify-center items-center flex">
                      {" "}
                      {`0${index + 1}`}
                    </div>
                    <div
                      className={`flex flex-col ${
                        index === data.length - 1
                          ? "h-fit"
                          : "lg:h-[93px] h-[135px]"
                      }  lg:gap-[1rem] gap-[.5rem] lg:w-[350px] w-[229px]`}
                    >
                      <p
                        className={`text-[#090808] text-[20px] leading-[23.44px] font-medium w-full ${
                          index % 2 == 0 ? "lg:text-left" : " lg:text-right"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.body.length >= 1 && (
                        <p
                          className={`text-[#53648B] lg:text-[18px] text-[16px] leading-[18.75px] lg:leading-[21.09px] ${
                            index % 2 == 0 ? "lg:text-left" : " lg:text-right"
                          }`}
                        >
                          {item.body}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
