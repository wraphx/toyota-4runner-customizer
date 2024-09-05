import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, OrbitControls, Loader } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { Runner4 } from "./vehicles/4Runner";

export default function App() {

  return (

    <CustomizationProvider>
      <div className="App">
      <Loader />
      <Canvas shadows camera={{ position: [0, 0, 20], fov:55 }}>

          <Suspense fallback={null}>
          <Runner4 scale={3} position={[0, -1, 0]} />
          </Suspense>
          <hemisphereLight intensity={0.5} />
          <ContactShadows  position={[0, -1, 0]} scale={40} blur={2.5} opacity={.8} far={20} />
          <ContactShadows position={[0, -1, 0.0]} opacity={2} scale={40} blur={2.5} far={0.8} />
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

          {/* <Environment preset="city" /> */}
          <Environment resolution={1024} files="/studio_small_08_2k.hdr" background ground={{ height: 50, radius: 150, scale: 55 }}>
           
          </Environment>
          
          {/* <OrbitControls minPo  larAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls autoRotate enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

