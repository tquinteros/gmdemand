import ClientsTemplate from "@/src/components/ClientsTemplate/ClientsTemplate";
import FaqsTemplate from "@/src/components/FaqsTemplate/FaqsTemplate";
import GmText from "@/src/components/GmText/GmText";
import Hero from "@/src/components/Hero/Hero";
import PricingTemplate from "@/src/components/PricingTemplate/PricingTemplate";
import SolutionsTemplate from "@/src/components/SolutionsTemplate/SolutionsTemplate";
import WorksTemplate from "@/src/components/WorksTemplate/WorksTemplate";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SolutionsTemplate />
      <GmText />
      <ClientsTemplate />
      <WorksTemplate />
      <PricingTemplate />
      <FaqsTemplate />
    </main>
  );
}
