import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine, ISourceOptions } from "tsparticles-engine";

const PortfolioParticles = () => {
  const options: ISourceOptions = {
    fullScreen: {
      enable: true, // set this to false to use the particles like any other DOM element, with this true they act like a background
      zIndex: -1,
    },
    fpsLimit: 100,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#979797"
        // value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 2 },
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        grab: {
          distance: 280,
          links: {
            opacity: 0.7,
            color: '#808080',
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  }

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  const particlesLoaded = async (container: Container) => {
     // the container is the current particles instance, it has methods like refresh(), start(), stop(), play(), pause()
    // the documentation can be found here: https://particles.js.org/docs/modules/Core_Container.html
  }

  return (
    <Particles
      id="tsparticles"
      // loaded={particlesLoaded}
      init={particlesInit}
      options={options}
    />
  );
};

export default PortfolioParticles
