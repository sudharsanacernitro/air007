import React, { Suspense, useEffect, useState, useLayoutEffect, useRef} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import gsap from 'gsap';
import { useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";

import { useControls } from "leva";
import { useFrame } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./mountain_bike/scene.gltf");
  const { camera } = useThree();
  const modelRef = useRef(scene);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      gsap.timeline({
        scrollTrigger: {
          scrub: true,
          markers: true,
        }
      })
        .to(camera.position, {
          x: 20.00,
          y: 0.00,
          z: 39.00,
          immediateRender: true,
          ease: "none"
        })
        .to(modelRef.current.position, {
          x: isMobile ? -3 : 5.05,  //  5.65 0.85 -7.90
          y: isMobile ? -3 :0.85,
          z: -7.90,
          immediateRender: true,
          ease: "none"
        }, "<")
        .to(modelRef.current.rotation, {
          x: 0.00,  //0.00 -2.04 -0.33
          y: -2.04,
          z: -0.33,
          immediateRender: true,
          ease: "none"
        }, "<")

        .to(camera.position, {
          x: 20.00,
          y: 0.0,
          z: 29.00,
          ease: "none"
        })
        .to(modelRef.current.position, {
          x: isMobile?-4.70:-10.05,
          y:isMobile?-1: 0.15,   //-10.05 0.15 -1.60
          z: -4.00,
          ease: "none"
        }, "<")
        .to(modelRef.current.rotation, {
          x: 0.0,
          y: -1.45,
          z: -0.13,
          ease: "none"
        }, "<");
    }, []);

    return () => ctx.revert();
  }, [isMobile]);

  
//  const { cameraPosition, scenePosition, sceneRotation } = useControls({
//   	cameraPosition: {
//   		value: {
//         x: 20.00,
//        y: 0.00,
//        z: 39.00,
//   		},
//   		step: 0.05,
//   	},
//   	scenePosition: {
//   		value: { 
//         x: isMobile ? -3 : 5.05,  //  5.65 0.85 -7.90
//         y: isMobile ? -3 :0.85,
//         z: -7.90,

//       }, //-0.90 1.15 -17.70
//   		step: 0.05,
//   	},

//   	sceneRotation: {
//   		value: {
        
//         x: 0.00,  //0.00 -2.04 -0.33
//                 y: -2.04,
//                 z: -0.33,
//        },
//   		step: 0.01,
//   	},
//   });

//     useFrame(() => {
//   	camera.position.x = cameraPosition.x;
//   	camera.position.y = cameraPosition.y;
//   	camera.position.z = cameraPosition.z;
//   	scene.position.x = scenePosition.x;
//   	scene.position.y = scenePosition.y;
//   	scene.position.z = scenePosition.z;
//   	scene.rotation.x = sceneRotation.x;
//   	scene.rotation.y = sceneRotation.y;
//   	scene.rotation.z = sceneRotation.z;
//   });

  return (
    <mesh position={isMobile ? [1.25, 0.65, -0.15] : [0, 0, 0]} rotation={isMobile?[-0.02 ,-0.08 ,-0.16]:[0, 0, 0]}>
      <hemisphereLight intensity={20} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={100} castShadow shadow-mapSize={1024} />
      <pointLight intensity={10} castShadow shadow-mapSize={1024} />
      <primitive object={modelRef.current} scale={isMobile ? 7 : 10} />
    </mesh>
  );
};

const BikeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position:isMobile? [ 52.35, 0.50, 4.95]:[20, 0, 39], fov: 20 }}

      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BikeCanvas;

  
//  const { cameraPosition, scenePosition, sceneRotation } = useControls({
//   	cameraPosition: {
//   		value: {
//   			x: 22.15,
//   			y: 0.70, // 22.15 0.70 -57.20
//   			z: -57.20,
//   		},
//   		step: 0.05,
//   	},
//   	scenePosition: {
//   		value: { x: -0.90, y: 1.15, z: -17.70 }, //-0.90 1.15 -17.70
//   		step: 0.05,
//   	},

//   	sceneRotation: {
//   		value: { x: -0.05, y: 0.33, z: -0.26 }, //-0.05 0.33 -0.26
//   		step: 0.01,
//   	},
//   });

//     useFrame(() => {
//   	camera.position.x = cameraPosition.x;
//   	camera.position.y = cameraPosition.y;
//   	camera.position.z = cameraPosition.z;
//   	scene.position.x = scenePosition.x;
//   	scene.position.y = scenePosition.y;
//   	scene.position.z = scenePosition.z;
//   	scene.rotation.x = sceneRotation.x;
//   	scene.rotation.y = sceneRotation.y;
//   	scene.rotation.z = sceneRotation.z;
//   });


  // Handle mouse movement effect
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const { innerWidth, innerHeight } = window;
  //     const x = (event.clientX / innerWidth - 0.5) * 0.1;
  //     const y = (event.clientY / innerHeight - 0.5) * 0.1;
  //     setRotation([y, x, 0]);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  // UseFrame to animate the falling motion
  // useFrame(() => {
  //   if (positionY > 0) {
  //     setVelocity((prevVelocity) => prevVelocity + 0.003); // Simulate acceleration due to gravity
  //     setPositionY((prevY) => Math.max(0, prevY - velocity)); // Update position
  //   }
  // });
