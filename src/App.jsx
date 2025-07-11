import "./App.css";
import ScrollFadeScaleBox from "./components/animations/ScrollFadeScaleBox";
import ViewportAnimatedTitle from "./components/animations/ViewportAnimatedTitle";
import StyckyAnimatedTitle from "./components/animations/StickyAnimatedTitle";
import EasingShowcase from "./components/animations/EasingShowcase";
import SplitText from "./components/animations/SplitText";
import ScrollMappedBlock from "./components/animations/ScrollMappedBlock";
import LerpFollower from "./components/animations/LerpFollower";
import ShaderPlane from "./components/animations/ShaderPlane";
import { Canvas } from "@react-three/fiber"; // 👈 Importa Canvas

function App() {
  return (
    <>
      <ScrollFadeScaleBox />
      <ViewportAnimatedTitle />
      <StyckyAnimatedTitle />
      <EasingShowcase />
      <SplitText />
      <ScrollMappedBlock />
      <LerpFollower />

      {/* 👇 Aquí envolvemos ShaderPlane con Canvas */}
      <div style={{ width: "100%", height: "400px" }}>
        <Canvas>
          <ShaderPlane />
        </Canvas>
      </div>
    </>
  );
}

export default App;
