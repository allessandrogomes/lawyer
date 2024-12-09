import "normalize.css"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from "../components/Header"
import IntroSection from "@/components/IntroSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
      </main>
    </>
  );
}
