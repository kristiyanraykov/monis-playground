import React from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { options } from './particles/expanding-bubbles';

export function ParticlesContainer() {
  const [init, setInit] = React.useState(false);

  // this should be run only once per application lifetime
  React.useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  // const options: ISourceOptions = {
  //   autoPlay: true,
  //   key: 'mouseTrail',
  //   name: 'Mouse Trail',
  //   particles: {
  //     // number: {
  //     //   value: 80,
  //     //   density: {
  //     //     enable: true
  //     //   }
  //     // },
  //     effect: {
  //       close: true,
  //       fill: true
  //     },
  //     color: {
  //       value: '#ff0000',
  //       animation: {
  //         enable: true,
  //         speed: 20,
  //         sync: true
  //       }
  //     },
  //     shape: {
  //       type: 'circle'
  //     },
  //     opacity: {
  //       value: 0.5
  //     },
  //     size: {
  //       value: {
  //         min: 1,
  //         max: 3
  //       }
  //     },
  //     move: {
  //       enable: true,
  //       speed: 6,
  //       center: {
  //         x: 50,
  //         y: 50,
  //         mode: 'percent',
  //         radius: 100
  //       }
  //     }
  //   },
  //   interactivity: {
  //     detectsOn: 'canvas',
  //     events: {
  //       onHover: {
  //         enable: false,
  //         mode: 'trail'
  //       },
  //       onClick: {
  //         enable: false,
  //         mode: 'push'
  //       },
  //       onDiv: {
  //         enable: false,
  //         mode: 'trail',
  //         type: 'circle'
  //       },
  //       resize: {
  //         enable: true,
  //         delay: 0.5
  //       }
  //     },
  //     modes: {
  //       grab: {
  //         distance: 400,
  //         links: {
  //           opacity: 1
  //         }
  //       },
  //       bubble: {
  //         distance: 400,
  //         size: 40,
  //         duration: 2,
  //         opacity: 0.8
  //       },
  //       repulse: {
  //         distance: 200
  //       },
  //       push: {
  //         quantity: 4
  //       },
  //       remove: {
  //         quantity: 2
  //       },
  //       trail: {
  //         delay: 0.01,
  //         // pauseOnStop: true,
  //         particles: {
  //           color: {
  //             value: '#00ff00',
  //             animation: {
  //               enable: true,
  //               speed: 200,
  //               sync: false
  //             }
  //           },
  //           links: {
  //             enable: false
  //           },
  //           move: {
  //             outModes: 'destroy'
  //           },
  //           opacity: {
  //             value: {
  //               min: 0.1,
  //               max: 1
  //             },
  //             animation: {
  //               enable: true,
  //               speed: 3,
  //               sync: true
  //             }
  //           },
  //           size: {
  //             value: {
  //               min: 1,
  //               max: 10
  //             }
  //           }
  //         }
  //       }
  //     }
  //   },
  //   background: {
  //     color: '#000000',
  //     opacity: 1
  //   }
  // };
  if (!init) return null;
  // const particlesLoaded = container => {
  //   console.log(container);
  // };
  return <Particles options={options} id='tsparticles'></Particles>;
  // particlesLoaded={particlesLoaded}
}
