import React from "react";
import Particle from "react-tsparticles";

const Snow = ({ particlesInit, particlesLoaded }) => {
  return (
    <div>
      <Particle
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "rgb(0,0,0)",
          },
          particles: {
            number: {
              value: 220,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              straight: false,
            },
          },
        }}
      />
    </div>
  );
};

export default Snow;
