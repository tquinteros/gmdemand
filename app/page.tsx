import GmText from "@/src/components/GmText/GmText";
import Hero from "@/src/components/Hero/Hero";
import PricingTemplate from "@/src/components/PricingTemplate/PricingTemplate";
import SolutionsTemplate from "@/src/components/SolutionsTemplate/SolutionsTemplate";
import WorksTemplate from "@/src/components/WorksTemplate/WorksTemplate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SolutionsTemplate />
      <GmText />
      <WorksTemplate />
      <PricingTemplate />
    </main>
  );
}
