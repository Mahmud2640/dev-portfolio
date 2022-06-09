import Particles from "react-tsparticles";
import config from "./config";
const ParticlesBg = () => {
  return (
    <div>
      <Particles params={config}></Particles>
    </div>
  );
};

export default ParticlesBg;
