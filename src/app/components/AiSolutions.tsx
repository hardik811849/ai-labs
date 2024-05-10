import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Head from "next/head";

const AiSolutions = () => {
  return (
    <div className="mb-[70px]">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-zinc-400 lg:text-[30px] sm:text-[20px] text-center sm:w-[90%] lg:mx-0">
            Transformative AI Solutions for Aspiring Companies
          </p>
          <p className="lg:text-[60px] sm:text-[30px] font-bold lg:w-1/2 sm:w-[90%] sm:my-6 lg:my-0 lg:mx-0 flex-wrap flex items-center justify-center">
            Unleashing <span className="text-gradient">&nbsp;Growth&nbsp;</span>{" "}
            In The <span className="text-gradient">&nbsp;Digital&nbsp;</span>Age
          </p>
        </div>

        <div className="lg:mt-[60px] sm:mt-[30px] grid lg:grid-cols-3 sm:grid-cols-1 gap-8 sm:w-[80%] lg:w-[93%] xl:w-[80%] mx-auto">
          <div>
            <div>
              <p className="lg:text-[50px] sm:text-[25px] flex lg:flex-col sm:flex-row font-semibold mb-[20px]">
                <span className="lg:text-[220px] digital-gradient sm:mr-2">
                  01
                </span>
                Solutions
              </p>
              <p className="lg:text-[26px] md:text-[22px] sm:text-[18px] leading-9 text-zinc-400 mb-[30px]">
                Proven pioneers in machine learning, data analytics, and
                conversational AI that drive your business forward.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 lg:text-[26px] sm:text-[18px] know-more">
                Know more <TrendingUp className="know-more-arrow" />
              </Button>
            </div>
          </div>
          <div>
            <div className="mt-[40px]">
              <p className="lg:text-[50px] sm:text-[25px] flex lg:flex-col sm:flex-row font-semibold mb-[20px]">
                <span className="lg:hidden sm:block digital-gradient mr-2">
                  02
                </span>
                Services
              </p>
              <p className="lg:text-[26px] md:text-[22px] sm:text-[18px] leading-9 text-zinc-400 mb-[30px]">
                Unlock new possibilities, boost productivity, and automate your
                business processes using our AI/ML services.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 lg:text-[26px] sm:text-[18px] know-more">
                Know more <TrendingUp className="know-more-arrow" />
              </Button>
            </div>
            <p className="text-[220px] digital-gradient-top-bottom font-semibold sm:hidden lg:block">
              02
            </p>
          </div>
          <div>
            <div className="">
              <p className="lg:text-[50px] sm:text-[25px] flex lg:flex-col sm:flex-row font-semibold mb-[20px]">
                <span className="lg:text-[220px] digital-gradient sm:mr-2">
                  03
                </span>
                Solutions
              </p>
              <p className="lg:text-[26px] md:text-[22px] sm:text-[18px] leading-9 text-zinc-400 mb-[30px]">
                Proven pioneers in machine learning, data analytics, and
                conversational AI that drive your business forward.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 lg:text-[26px] sm:text-[18px] know-more">
                Know more <TrendingUp className="know-more-arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutions;
