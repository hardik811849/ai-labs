import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Head from "next/head";

const AiSolutions = () => {
  return (
    <div className="mb-[100px]">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-zinc-400 text-[30px]">
            Transformative AI Solutions for Aspiring Companies
          </p>
          <p className="text-[60px] font-bold w-1/2 flex-wrap  flex items-center justify-center">
            Unleashing <span className="text-gradient">&nbsp;Growth&nbsp;</span>{" "}
            In The <span className="text-gradient">&nbsp;Digital&nbsp;</span>Age
          </p>
        </div>

        <div className="mt-[150px] grid grid-cols-3 gap-8 w-[80%] mx-auto">
          <div>
            <div className="">
              <p className="text-[50px] flex flex-col font-semibold mb-[20px]">
                <span className="text-[220px] digital-gradient">01</span>
                Solutions
              </p>
              <p className="text-[26px] leading-9 text-zinc-400 mb-[30px]">
                Proven pioneers in machine learning, data analytics, and
                conversational AI that drive your business forward.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
                Know more <TrendingUp className="know-more-arrow" />
              </Button>
            </div>
          </div>
          <div>
            <div className="mt-[40px]">
              <p className="text-[50px] flex flex-col font-semibold mb-[20px]">
                Services
              </p>
              <p className="text-[26px] leading-9 text-zinc-400 mb-[30px]">
                Unlock new possibilities, boost productivity, and automate your
                business processes using our AI/ML services.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
                Know more <TrendingUp className="know-more-arrow" />
              </Button>
            </div>
            <p className="text-[220px] digital-gradient-top-bottom font-semibold">
              02
            </p>
          </div>
          <div>
            <div className="">
              <p className="text-[50px] flex flex-col font-semibold mb-[20px]">
                <span className="text-[220px] digital-gradient">03</span>
                Solutions
              </p>
              <p className="text-[26px] leading-9 text-zinc-400 mb-[30px]">
                Proven pioneers in machine learning, data analytics, and
                conversational AI that drive your business forward.
              </p>
              <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
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
