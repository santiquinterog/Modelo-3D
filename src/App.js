import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { OrbitControls, Sky } from "@react-three/drei";

import House from "./components/House/House";

import "./app.css";
function App() {
  return (
    <>
      <h1>¡Medieval House!</h1>
      <div className="div-container-modelo">
        <Canvas camera={{ zoom: 1, position: [20, 15, 0] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35,35,0]} intensity={0.4}/>
          <pointLight position={[-35,35,0]} intensity={0.4}/>
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
          <Suspense fallback={null}>
            <House />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
