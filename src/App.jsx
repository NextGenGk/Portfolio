import "./App.css";
import FAQSection from "./sections/FaqSection";
import Projects from "./sections/Projects";
import { WavyBackground } from "./sections/WavyBackground";
import { Typewriter } from "react-simple-typewriter"; // optional
import TimelineDemo from "./sections/TimelineDemo";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <WavyBackground>
        <div className=" text-center text-white -mt-20">
          <h1 className="text-6xl font-bold text-white mb-4">
            {/* Optionally use Typewriter */}
            I'm Gaurav Kumar
          </h1>
          <p className="text-2l font-bold md:text-2xl text-white">
            A {""}
            <Typewriter
              words={[
                "Web Developer",
                "Software Developer",
                "Game Developer",
                "Graphic Designer",
              ]}
              loop
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </p>
        </div>
      </WavyBackground>
      <TimelineDemo />
      <Projects />
      <FAQSection />
    </ThemeProvider>
  );
}

export default App;
