import ClientsTemplate from "@/src/components/ClientsTemplate/ClientsTemplate";
import FaqsTemplate from "@/src/components/FaqsTemplate/FaqsTemplate";
import Footer from "@/src/components/Footer/Footer";
import GmText from "@/src/components/GmText/GmText";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import PricingTemplate from "@/src/components/PricingTemplate/PricingTemplate";
import SolutionsTemplate from "@/src/components/SolutionsTemplate/SolutionsTemplate";
import SubMenu from "@/src/components/SubMenu/SubMenu";
import WorksTemplate from "@/src/components/WorksTemplate/WorksTemplate";

export default function Home() {
  return (
    <main className="relative !overflow-x-hidden">
      <SubMenu />
      <Hero />
      <SolutionsTemplate />
      <GmText />
      <ClientsTemplate />
      <WorksTemplate />
      <PricingTemplate />
      <FaqsTemplate />
      <Footer />
    </main>
  );
}
