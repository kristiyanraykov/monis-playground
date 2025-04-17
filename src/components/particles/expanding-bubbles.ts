import { IOptions, ISourceOptions, RecursivePartial } from '@tsparticles/engine';

export const options: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: '#000000'
    },
    image: '',
    position: '',
    repeat: 'no-repeat',
    size: 'cover',
    opacity: 0
  },
  // backgroundMask: {
  //   composite: 'destination-out',
  //   cover: {
  //     opacity: 1,
  //     color: {
  //       value: ''
  //     }
  //   },
  //   enable: false
  // },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  detectRetina: true,
  duration: 0, //seconds
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      // onHover: {
      //   enable: true,
      //   mode: 'connect',
      //   parallax: {
      //     enable: false,
      //     force: 60,
      //     smooth: 10
      //   }
      // },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 200,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 100,
          duration: 0.4,
          mix: false,
          selectors: {}
        }
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      // push: {
      //   default: true,
      //   groups: [],
      //   quantity: 4
      // },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: {}
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      particle: {
        replaceCursor: false,
        pauseOnStop: false,
        stopDelay: 0
      }
      // light: {
      //   area: {
      //     gradient: {
      //       start: {
      //         value: '#ffffff'
      //       },
      //       stop: {
      //         value: '#000000'
      //       }
      //     },
      //     radius: 1000
      //   },
      //   shadow: {
      //     color: {
      //       value: '#000000'
      //     },
      //     length: 2000
      //   }
      // }
    }
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        value: 1
      },
      vertical: {
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          value: 1
        },
        vertical: {
          value: 1
        }
      },
      enable: false,
      maxSpeed: 50,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: 'random',
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        }
      }
    },
    move: {
      // angle: {
      //   offset: 0,
      //   value: 0
      // },
      // attract: {
      //   distance: 200,
      //   enable: false,
      //   rotate: {
      //     x: 3000,
      //     y: 3000
      //   }
      // },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 1000
      },
      decay: 0,
      distance: {},
      direction: 'outside',
      drift: 0,
      enable: true,
      // gravity: {
      //   acceleration: 9.81,
      //   enable: false,
      //   inverse: false,
      //   maxSpeed: 50
      // },
      // path: {
      //   clamp: true,
      //   delay: {
      //     value: 0
      //   },
      //   enable: false,
      //   options: {}
      // },
      // outModes: {
      //   default: 'out',
      //   bottom: 'out',
      //   left: 'out',
      //   right: 'out',
      //   top: 'out'
      // },
      random: false,
      size: false,
      speed: 6
      // spin: {
      //   acceleration: 0,
      //   enable: false
      // },
      // straight: false,
      // trail: {
      //   enable: false,
      //   length: 10,
      //   fill: {}
      // },
      // vibrate: false,
      // warp: false
    },
    number: {
      // density: {
      //   enable: true,
      //   width: 1000,
      //   height: 1000
      // },
      limit: {
        mode: 'delete',
        value: 500
      },
      value: 100
    },
    opacity: {
      value: 0.5,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none'
      }
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: '#000'
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: 'circle'
    },
    size: {
      value: {
        min: 10,
        max: 15
      }
      // animation: {
      //   count: 0,
      //   enable: false,
      //   speed: 5,
      //   decay: 0,
      //   delay: 0,
      //   sync: false,
      //   mode: 'auto',
      //   startValue: 'random',
      //   destroy: 'none'
      // }
    },
    stroke: {
      width: 0
    },
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    destroy: {
      bounds: {},
      mode: 'none',
      split: {
        count: 1,
        factor: {
          value: 3
        },
        rate: {
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  key: 'random',
  name: 'Random Colors',
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
};
