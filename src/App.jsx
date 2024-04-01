import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Slider } from "./components/Slider";
import scenes from "./scenes";

import "./index.css";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 5], fov: 45 }}>
      <color attach="background" args={["#eee"]} />

      <OrbitControls />
      <Slider scenes={scenes} />
    </Canvas>
  );
};

export default App;
