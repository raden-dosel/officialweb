import { useGLTF, Center } from "@react-three/drei";

const Model = ({ url, scale }) => {
  const { scene } = useGLTF(url);

  return (
    <Center>
      <primitive
        object={scene}
        scale={scale}
        rotation={[Math.PI / 3.3, Math.PI / 5, -Math.PI / 4.5]}
      />
    </Center>
  );
};

export default Model;
