import { useThree } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import Scene from "./Scene";

import scenes from "../scenes";

export const Slider = () => {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />

      {scenes.map((scene, index) => (
        <mesh key={index}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial color="hotpink" />
          <Scene path={scene.modelPath} />
          <Html fullscreen>
            <div className="flex justify-center items-end h-full">
              <div className="w-[700px] pb-4 text-center">
                <h1 className="text-5xl font-extrabold">{scene.title}</h1>
                <p className="mt-2 text-large">{scene.description}</p>
              </div>
            </div>
          </Html>
        </mesh>
      ))}
    </>
  );
};
