import "normalize.css"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from "../components/Header"
import IntroSection from "@/components/IntroSection"
import SpecialtiesSection from "@/components/SpecialtiesSection"
import FormSection from "@/components/FormSection"
import RecentsCasesSection from "@/components/RecentsCasesSection"
import FeedbacksSection from "@/components/FeedbacksSection"
import NewsLetter from "@/components/Newsletter"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <SpecialtiesSection />
        <FormSection />
        <RecentsCasesSection />
        <FeedbacksSection />
        <NewsLetter />
      </main>
    </>
  );
}
