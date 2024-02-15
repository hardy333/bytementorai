import BecomeProgrammer from "./BecomeProgrammer";
import Certificate from "./Certificate";
import Cta from "./Cta";
import Faq from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import WhatWillYoulearn from "./WhatWillYoulearn";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhatWillYoulearn />

      <BecomeProgrammer />
      <Certificate />
      <Faq />
      <Cta />
    </>
  );
}
