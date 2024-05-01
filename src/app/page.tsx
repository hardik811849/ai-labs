import About from "./components/About";
import AiSolutions from "./components/AiSolutions";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Resouces from "./components/Resouces";
import Services from "./components/Services";
import Teams from "./components/Teams";
import WhatOtherSay from "./components/WhatOtherSay";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="relative lg:top-0 sm:top-80">
        <Hero />
      </div>
      <About />
      <AiSolutions />
      <Services />
      <Teams />
      <Resouces />
      <WhatOtherSay />
      <Insights />
    </div>
  );
}
